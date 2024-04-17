import React from "react";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
const WindCalendar = () => {
  const handleDateClick = () => {
    alert("たっぷしたな");
    // その他の処理を追加できます
  };
  return (
    <div>
      <div className="">
        <FullCalendar
          height="60vh"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateClick}
        />
      </div>
      <Footer />
    </div>
  );
};

export default WindCalendar;
