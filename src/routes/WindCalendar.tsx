import React, { useState } from "react";
import type {
  BadgeProps,
  CalendarProps,
  MenuProps,
  PopconfirmProps,
} from "antd";
import { Badge, Calendar, Dropdown, message } from "antd";
import type { Dayjs } from "dayjs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "../components/Button";
import ModalComp from "../components/DeleteModal";
import DeleteModal from "../components/DeleteModal";
import { MoreOutlined } from "@ant-design/icons";
const WindCalendar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
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

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <DeleteModal confirm={confirm} cancel={cancel} />,
    },
    {
      key: "2",
      label: <Button className="bg-blue-500" text="編集" />,
    },
  ];

  const eventToggle = () => {};
  return (
    <div className="px-2">
      <div className="">
        <FullCalendar
          height="60vh"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          locale="ja"
          businessHours={true}
        />
      </div>
      <p className="pl-2">12月15日</p>
      <div className="w-full text-left flex items-center bg-cream-white shadow rounded-lg">
        <div className="border-r-2 p-2">
          <p className="w-full">19:00</p>
          <p className="w-full">20:00</p>
        </div>
        <div className="p-3 flex justify-between w-full">
          <p>鎌倉学生選手権</p>
          <Dropdown menu={{ items }} placement="bottom">
            <MoreOutlined />
          </Dropdown>
        </div>
      </div>
      <Button className="h-full w-full mt-2" text="予定を追加" type="button" />
      <Footer />
    </div>
  );
};

export default WindCalendar;
