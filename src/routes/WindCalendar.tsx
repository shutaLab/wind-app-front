import React from "react";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WindCalendar = () => {
  const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  return (
    <div>
      <Header />
      <Calendar />
      <Footer />
    </div>
  );
};

export default WindCalendar;
