import React, { useState, useEffect, useMemo } from "react";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "../components/Button";
import { useGetCalendarEvent } from "../queries/CalenarQuery";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import EventList from "../components/EventsList";
import { EventApi } from "@fullcalendar/core";
import "../App";
import NoteHeader from "../components/NoteHeader";
import axios from "axios";
import { CalendarType } from "../types/Calendar";
import StyleWrapper from "../components/StyleWrapper";
const WindCalendar = () => {
  const [open, setOpen] = useState(false);
  const { data: calendarEvents } = useGetCalendarEvent();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = format(selectedDate, "MM月dd日", { locale: ja });

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
      end: new Date(new Date(event.end).setDate(new Date(event.end).getDate()))
        .toISOString()
        .split("T")[0],
    }));
  }, [calendarEvents]);

  return (
    <div>
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default WindCalendar;
