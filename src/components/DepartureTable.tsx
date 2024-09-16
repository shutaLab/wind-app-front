import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import { useGetDepartures } from "../queries/DepartureQuery";
import { format, parseISO, subHours } from "date-fns";
import { EventClickArg } from "@fullcalendar/core";
import { useState } from "react";
import StyleWrapper from "./StyleWrapper";
import DepartureEventModal from "./DepartureEventModal";
import { DepartureType, DepartureWithTotalTime } from "../types/Departure";
import { EventInput } from "@fullcalendar/core";

const DepartureTable = () => {
  const [open, setOpen] = useState(false);

  const formatTime = (dateString: string) => {
    const date = parseISO(dateString);
    const adjustedDate = subHours(date, 9);
    return format(adjustedDate, "yyyy-MM-dd'T'HH:mm:ss");
  };

  // useGetDepartures フックを使用してデータを取得
  const { data } = useGetDepartures();
  console.log(data);

  const departuresData = data?.departures || [];

  const resources = departuresData.map((departure: DepartureType) => ({
    id: departure.user?.id?.toString() ?? "",
    title: departure.user?.user_profile?.name || "Unknown",
  }));

  const events = departuresData.map((departure: DepartureType) => ({
    id: departure.id?.toString(),
    resourceId: departure.user?.id?.toString() ?? "",
    start: formatTime(departure.start),
    end: formatTime(departure.end),
    title: departure.intra_user?.user_profile?.name || "",
    backgroundColor: departure.intra_user_id ? "#8EAAE5" : "#FF6347",
    extendedProps: {
      user: departure.user,
    },
  }));
  console.log(events);

  const handleEventClick = (clickInfo: EventClickArg) => {
    setOpen(true);
    // イベントクリック時の処理
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
            slotMinTime="07:00:00"
            slotMaxTime="17:00:00"
            allDaySlot={false}
            locale="ja"
            contentHeight="auto"
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            eventClick={handleEventClick}
          />
        </StyleWrapper>
      </div>
      <DepartureEventModal open={open} handleClose={handleClose} />

      {/* total_time を表示
      {totalTime && (
        <div className="mt-4 text-center">
          <h3>Total Time: {totalTime}</h3>
        </div>
      )} */}
    </div>
  );
};

export default DepartureTable;
