import React, { useState, useEffect, useMemo } from "react";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "../components/Button";
import CreateCalendarEvent from "../components/CreateCalendarEvent";
import { useGetCalendarEvent } from "../queries/CalenarQuery";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import StyleWrapper from "../components/StyleWrapper";
import EventList from "../components/EventsList";
import { EventApi } from "@fullcalendar/core";
import "../App";
import NoteHeader from "../components/NoteHeader";
import axios from "axios";
import RequireAuth from "../components/RequireAuth";
import { CalendarType } from "../types/Calendar";
const WindCalendar = () => {
  const [open, setOpen] = useState(false);
  const { data: calendarEvents } = useGetCalendarEvent();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = format(selectedDate, "MM月dd日", { locale: ja });

  const clickModalOpen = () => {
    setOpen(true);
  };

  const clickModalClose = () => {
    setOpen(false);
  };

  // 今日の日付に対応するイベントをフィルタリング
  const eventsOnSelectedDate = calendarEvents?.filter((event: CalendarType) => {
    const eventStart = new Date(event.start);
    const eventEnd = new Date(event.end);
    const todayStart = new Date(selectedDate);
    const todayEnd = new Date(selectedDate);

    // set the time to the start of the day for accurate comparison
    todayStart.setHours(0, 0, 0, 0);
    todayEnd.setHours(23, 59, 59, 999);

    // イベントの終了日を調整
    eventEnd.setDate(eventEnd.getDate() - 1);

    // Check if the event is on the selected date
    return (
      (eventStart >= todayStart && eventStart <= todayEnd) ||
      (eventEnd >= todayStart && eventEnd <= todayEnd) ||
      (eventStart <= todayStart && eventEnd >= todayEnd)
    );
  });

  const eventClassNames = ({ event }: { event: EventApi }) => {
    if (event.extendedProps.is_absent) {
      return ["is-absent"];
    }
    return [];
  };

  const formattedEvents = useMemo(() => {
    if (!calendarEvents) return [];

    return calendarEvents.map((event: CalendarType) => ({
      ...event,
      id: event.id.toString(),
    }));
  }, [calendarEvents]);

  return (
    <RequireAuth>
      <div className="flex flex-col min-h-screen">
        <NoteHeader />
        <div className="flex-grow overflow-y-auto px-3">
          <div className="mb-4">
            <StyleWrapper>
              <FullCalendar
                headerToolbar={{
                  start: "prev",
                  center: "title",
                  end: "next",
                }}
                height="60vh"
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                locale="ja"
                events={formattedEvents}
                businessHours={true}
                displayEventTime={false}
                schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                dateClick={(info) => setSelectedDate(new Date(info.date))}
                eventClassNames={eventClassNames}
              />
            </StyleWrapper>
          </div>
          <EventList events={eventsOnSelectedDate || []} date={today} />
          <Button
            className="h-full w-full mt-2 bg-custom-gray text-white mb-20"
            text="予定を追加"
            onClick={clickModalOpen}
          />
        </div>
        <Footer />
        <CreateCalendarEvent open={open} handleClose={clickModalClose} />
      </div>
    </RequireAuth>
  );
};

export default WindCalendar;
