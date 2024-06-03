import React, { useState } from "react";

import type { Dayjs } from "dayjs";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "../components/Button";
import styled from "@emotion/styled";
import Header from "../components/Header";
import CreateCalendarEvent from "../components/CreateCalendarEvent";
const WindCalendar = () => {
  const [open, setOpen] = useState(false);

  const handleDateClick = () => {
    alert("たっぷしたな");
  };

  const clickModalOpen = () => {
    setOpen(true);
  };

  const clickModalClose = () => {
    setOpen(false);
  };

  const StyleWrapper = styled.div`
    .fc .fc-toolbar.fc-header-toolbar {
      margin-bottom: 0;
    }
    .fc .fc-toolbar-title {
      font-size: 1.3rem;
      color: #37362f;
    }
    .fc .fc-button-primary {
      font-size: 0.75rem;
      background-color: #ffffff00;
      color: #acaba9;
      border: none;
      outline: none;
    }
    .fc .fc-toolbar {
      justify-content: center;
    }

    .fc-today-button {
      background-color: #ffffff00;
      color: #37362f;
      border: none;
      outline: none;
    }
    .fc .fc-button-primary:not(:disabled):active,
    .fc .fc-button-primary:not(:disabled).fc-button-active {
      background-color: #ffffff00;
      color: #acaba9;
      box-shadow: none;
    }
    .fc .fc-button-primary:not(:disabled):focus,
    .fc .fc-button-primary:not(:disabled).fc-button-focus {
      background-color: #ffffff00;
      color: #acaba9;
      box-shadow: none;
    }
    .fc .fc-today-button:disabled {
      opacity: 1;
    }
  `;

  const eventToggle = () => {};
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
              businessHours={true}
              schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            />
          </StyleWrapper>
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
          onClick={clickModalOpen}
        />
      </div>
      <Footer />
      <CreateCalendarEvent open={open} handleClose={clickModalClose} />
    </div>
  );
};

export default WindCalendar;
