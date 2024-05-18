import React, { useState } from "react";
import Footer from "../components/Footer";
import Ranking from "../components/Ranking";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../@/components/ui/table";
import Button from "../components/Button";
import { Tabs, TabsList, TabsTrigger } from "../@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import styled from "@emotion/styled";
const DepartureTable = () => {
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

  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
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
      backgroundColor: "#8EAAE5",
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
    <div className="">
      <div className="px-3">
        <StyleWrapper>
          <FullCalendar
            headerToolbar={{ start: "prev", center: "title", end: "next" }}
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
            contentHeight="auto"
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          />
        </StyleWrapper>
      </div>
    </div>
  );
};

export default DepartureTable;
