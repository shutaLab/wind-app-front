import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import styled from "@emotion/styled";
import { useGetDepartures } from "../queries/DepartureQuery";
import { format, parseISO, subHours } from "date-fns";
import { EventClickArg } from "@fullcalendar/core";
import { useState } from "react";
import StyleWrapper from "./StyleWrapper";
import DepartureEventModal from "./DepartureEventModal";
import { DepartureType } from "../types/Departure";

const DepartureTable = () => {
  const formatTime = (dateString: string) => {
    const date = parseISO(dateString);
    const adjustedDate = subHours(date, 9);
    return format(adjustedDate, "yyyy-MM-dd'T'HH:mm:ss");
  };

  const { data } = useGetDepartures();
  const [open, setOpen] = useState(false);
  const resources = data
    ? Array.from(
        new Map(
          data.map((departure: DepartureType) => [
            departure.user?.id,
            {
              id: departure.user?.id?.toString() ?? "",
              title: departure.user?.user_profile?.name || "Unknown",
            },
          ])
        ).values()
      )
    : [];

  const events = data
    ? data.map((departure: DepartureType) => ({
        id: departure.id?.toString(),
        resourceId: departure.user?.id?.toString() ?? "",
        start: formatTime(departure.start),
        end: formatTime(departure.end),
        title: departure.intra_user?.user_profile?.name || "",
        backgroundColor: departure.intra_user_id ? "#8EAAE5" : "#FF6347",
        user: departure.user,
      }))
    : [];

  console.log(events);

  console.log(data);

  const handleEventClick = (clickInfo: EventClickArg) => {
    setOpen(true);
    // console.log(clickInfo.event.id);
    // console.log(clickInfo.event.extendedProps.user.user_profile.name);
  };
  const handleClose = () => {
    setOpen(false);
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
            initialDate="2024-08-11"
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
      <DepartureEventModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default DepartureTable;
