import React, { useState } from "react";

import type { Dayjs } from "dayjs";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "../components/Button";

const WindCalendar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const handleDateClick = () => {
    alert("たっぷしたな");
  };

  const eventToggle = () => {};
  return (
    <div>
      <div className="px-3">
        <div className="">
          <FullCalendar
            height="60vh"
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            locale="ja"
            businessHours={true}
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          />
        </div>
        <p className="pl-2">12月15日</p>
        <div className="w-full text-left flex items-center bg-custom-white shadow rounded-lg">
          <div className="border-r-2 p-2">
            <p className="w-full">19:00</p>
            <p className="w-full">20:00</p>
          </div>
          <div className="p-3 flex justify-between w-full">
            <p>鎌倉学生選手権</p>
          </div>
        </div>
        <Button
          className="h-full w-full mt-2 bg-custom-gray text-white"
          text="予定を追加"
          type="button"
        />
      </div>
      <Footer />
    </div>
  );
};

export default WindCalendar;
