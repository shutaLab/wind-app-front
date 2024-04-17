import React from "react";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const WindCalendar = () => {
  return (
    <div>
      <div className="">
        <FullCalendar
          height="60vh"
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>
      <Footer />
    </div>
  );
};

export default WindCalendar;
