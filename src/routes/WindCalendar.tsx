import React, { useState } from "react";
import type { BadgeProps, CalendarProps, PopconfirmProps } from "antd";
import { Badge, Calendar, message } from "antd";
import type { Dayjs } from "dayjs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "../components/Button";
import ModalComp from "../components/DeleteModal";
import DeleteModal from "../components/DeleteModal";
const WindCalendar = () => {
  const handleDateClick = () => {
    alert("たっぷしたな");
  };

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    message.success("削除しました");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("キャンセルしました");
  };
  return (
    <div className="px-2">
      <div className="">
        <FullCalendar
          height="65vh"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          locale="ja"
          businessHours={true}
        />
      </div>
      <p className="bg-cream-white">12月15日</p>
      <p>鎌倉学生選手権</p>
      <Button className="h-full w-full mt-2" text="予定を追加" type="button" />
      <DeleteModal confirm={confirm} cancel={cancel} />
      <Footer />
    </div>
  );
};

export default WindCalendar;
