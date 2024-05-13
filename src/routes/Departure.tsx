import React, { useState } from "react";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import Button from "../components/Button";
import DepartureTable from "../components/DepartureTable";

const Departure = () => {
  const resources = [
    { id: "a", title: "山田脩太" },
    { id: "b", title: "𩜙平名春人" },
    { id: "c", title: "Task C" },
    { id: "d", title: "Task D" },
    { id: "e", title: "Task E" },
    { id: "f", title: "Task F" },
    { id: "g", title: "Task G" },
  ];

  const events = [
    {
      id: "1",
      resourceId: "a",
      start: "2023-06-14T09:00:00",
      end: "2023-06-14T11:25:00",
      title: "Event 1",
    },
    {
      id: "2",
      resourceId: "b",
      start: "2023-06-14T10:00:00",
      end: "2023-06-14T12:00:00",
      title: "Event 2",
    },
    {
      id: "3",
      resourceId: "c",
      start: "2023-06-14T14:00:00",
      end: "2023-06-14T16:00:00",
      title: "Event 3",
    },
    {
      id: "4",
      resourceId: "d",
      start: "2023-06-14T14:00:00",
      end: "2023-06-14T16:00:00",
      title: "Event 3",
    },
    {
      id: "5",
      resourceId: "e",
      start: "2023-06-14T14:00:00",
      end: "2023-06-14T16:00:00",
      title: "Event 3",
    },
    {
      id: "6",
      resourceId: "f",
      start: "2023-06-14T14:00:00",
      end: "2023-06-14T16:00:00",
      title: "Event 3",
    },
    {
      id: "7",
      resourceId: "g",
      start: "2023-06-14T14:00:00",
      end: "2023-06-14T16:00:00",
      title: "Event 3",
    },
  ];
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="demo-app">
      <div className="demo-app-main">
        {/* <FullCalendar
          plugins={[resourceTimeGridPlugin]}
          initialView="resourceTimeGrid"
          resources={resources}
          height="70vh"
          events={events}
          initialDate="2023-06-14"
          slotMinTime="09:00:00"
          slotMaxTime="18:00:00"
          allDaySlot={false}
          locale="ja"
          schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        /> */}
      </div>
      <div>
        <Button
          className=" bg-custom-black text-white"
          text="見る"
          onClick={showDrawer}
        />
      </div>
      <div>
        <DepartureTable />
      </div>
      <Footer />
    </div>
  );
};

export default Departure;
