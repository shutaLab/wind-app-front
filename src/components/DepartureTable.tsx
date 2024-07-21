import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import styled from "@emotion/styled";
import { useGetDepartures } from "../queries/DepartureQuery";
import { format, parseISO, subHours } from "date-fns";
import { EventClickArg } from "@fullcalendar/core";
import { useState } from "react";

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

  const formatTime = (dateString: string) => {
    const date = parseISO(dateString);
    const adjustedDate = subHours(date, 9);
    return format(adjustedDate, "yyyy-MM-dd'T'HH:mm:ss");
  };

  const { data } = useGetDepartures();
  
  const resources = data
    ? Array.from(
        new Map(
          data.map((departure) => [
            departure.user?.id,
            { id: departure.user?.id, title: departure.user?.user_profile?.name || "Unknown" },
          ])
        ).values()
      )
    : [];

  const events = data
    ? data.map((departure) => ({
        id: departure.id,
        resourceId: departure.user.id.toString(),
        start: formatTime(departure.start),
        end: formatTime(departure.end),
        title: departure.intra_user?.user_profile?.name || "",
        backgroundColor: departure.intra_user_id ? "#8EAAE5" : "#FF6347",
        user: departure.user
      }))
    : [];

  console.log(data);

  const handleEventClick = (clickInfo: EventClickArg) => {
    console.log(clickInfo.event.id);
    console.log(clickInfo.event.extendedProps.user.user_profile.name)
  };


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
            initialDate="2024-07-10"
            slotMinTime="09:00:00"
            slotMaxTime="18:00:00"
            allDaySlot={false}
            locale="ja"
            contentHeight="auto"
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            eventClick={handleEventClick}
          />
        </StyleWrapper>
      </div>
    </div>
  );
};

export default DepartureTable;
