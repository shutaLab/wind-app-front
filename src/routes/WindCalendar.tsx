import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "../components/Button";
import styled from "@emotion/styled";
import CreateCalendarEvent from "../components/CreateCalendarEvent";
import Header from "../components/Header";
import { useGetCalendarEvent } from "../queries/CalenarQuery";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import StyleWrapper from "../components/StyleWrapper";
import EventList from "../components/EventsList";

const WindCalendar = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetCalendarEvent();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = format(selectedDate, "MM月dd日", { locale: ja });

  const clickModalOpen = () => {
    setOpen(true);
  };

  const clickModalClose = () => {
    setOpen(false);
  };

  // 今日の日付に対応するイベントをフィルタリング
  const eventsOnSelectedDate = data?.filter((event) => {
    const eventStart = new Date(event.start);
    const eventEnd = new Date(event.end);
    const todayStart = new Date(selectedDate);
    const todayEnd = new Date(selectedDate);
    console.log(todayStart, todayEnd);

    // set the time to the start of the day for accurate comparison
    todayStart.setHours(0, 0, 0, 0);
    todayEnd.setHours(23, 59, 59, 999);

    return eventStart <= todayEnd && eventEnd >= todayStart;
  });

  return (
    <div>
      <Header />
      <div className="px-3">
        <div className="">
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
              events={data}
              businessHours={true}
              displayEventTime={false}
              schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
              dateClick={(info) => setSelectedDate(new Date(info.date))}
            />
          </StyleWrapper>
        </div>
        <EventList events={eventsOnSelectedDate || []} date={today} />
        <Button
          className="h-full w-full mt-2 bg-custom-gray text-white"
          text="予定を追加"
          onClick={clickModalOpen}
        />
      </div>
      <Footer />
      <CreateCalendarEvent open={open} handleClose={clickModalClose} />
    </div>
  );
};

export default WindCalendar;
