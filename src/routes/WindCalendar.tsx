import React, { useState } from "react";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "../components/Button";
import ModalComp from "../components/ModalComp";
const WindCalendar = () => {
  const handleDateClick = () => {
    alert("たっぷしたな");
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleClickModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="px-2">
      <div className="">
        <FullCalendar
          height="65vh"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          dateClick={handleClickModal}
          locale="ja"
          businessHours={true}
        />
      </div>
      <p className="bg-cream-white">12月15日</p>
      <p>鎌倉学生選手権</p>
      <Button className="h-full w-full mt-2" text="予定を追加" type="button" />
      <ModalComp
        isModalOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      <Footer />
    </div>
  );
};

export default WindCalendar;
