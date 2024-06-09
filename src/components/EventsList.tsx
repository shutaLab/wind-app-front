import React, { useState } from "react";
import EventIcon from "@mui/icons-material/Event";
import { Calendar } from "../types/Calendar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import EventsAlertDialog from "./EventsAlertDialog";
import Event from "./Event";

interface EventListProps {
  events: Calendar[];
  date: string;
}

const EventList: React.FC<EventListProps> = ({ events, date }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const clickModalOpen = () => {
    setModalOpen(true);
  };
  const clickModalClose = () => {
    setModalOpen(false);
  };

  const handleClick = (id: string) => {
    console.log(id);
  };

  return (
    <div className="w-full text-left flex items-center bg-custom-white rounded-lg shadow-md mt-3">
      <div className="m-3 w-full">
        <p>{date}</p>
        {events && events.length > 0 ? (
          events.map((event) => <Event key={event.id} event={event} />)
        ) : (
          <p className="text-lg">予定はありません</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
