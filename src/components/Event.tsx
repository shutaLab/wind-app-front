import React, { useState } from "react";
import { Calendar } from "../types/Calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import EventsAlertDialog from "./EventsAlertDialog";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useGetUser } from "../queries/UserQuery";
interface EventProps {
  event: Calendar;
}

const Event: React.FC<EventProps> = ({ event }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { data: user } = useGetUser();

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
  return (
    <>
      <div className="flex p-2 justify-between">
        <div className="flex">
          <EventNoteOutlinedIcon className="text-gray-500 mr-2" />
          <div className="flex flex-col text-left">
            {event.is_absent ? <p className="">欠席連絡</p> : <></>}
            <p className="text-lg">{event.title}</p>
            <p className="text-sm">{event.content}</p>
          </div>
        </div>
        <div>
          {user?.id === event.user.id && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <MoreVertOutlinedIcon />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem
                  className="text-gray-600"
                  onSelect={openDialog}
                >
                  削除
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={clickModalOpen}
                  className="text-gray-600"
                >
                  編集
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
      {event.id && (
        <EventsAlertDialog
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          eventId={event.id}
        />
      )}
    </>
  );
};

export default Event;
