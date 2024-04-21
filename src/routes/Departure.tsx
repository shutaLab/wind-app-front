import React from "react";
import Footer from "../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

const Departure = () => {
  const resources = [
    { id: "a", title: "Task A" },
    { id: "b", title: "Task B" },
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
  return (
    <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[resourceTimeGridPlugin]}
          initialView="resourceTimeGrid"
          resources={resources}
          events={events}
          initialDate="2023-06-14"
          slotMinTime="09:00:00"
          slotMaxTime="17:00:00"
          allDaySlot={false}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Departure;
