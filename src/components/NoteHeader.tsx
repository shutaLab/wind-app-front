import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import CreateModal from "./CreateModal";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import { useLogout } from "../queries/AuthQuery";
import {
  useAllReadNotifications,
  useGetNotifications,
  useReadNotification,
} from "../queries/NotificationQuery";
import { ScrollArea } from "../@/components/ui/scroll-area";
import { NotificationItem } from "../types/Notification";
import DepartureNotificationDialog from "./DepartureNotificationDialog";
import NotificationModal from "./IntraClaimModal";
import axios from "axios";
import { readNotification } from "../api/notificationApi";
import IntraClaimModal from "./IntraClaimModal";
import { useShowDeparture } from "../queries/DepartureQuery";
import { DepartureType } from "../types/Departure";
import { Button } from "../@/components/ui/button";
const NoteHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const [selectedNotification, setSelectedNotification] =
    useState<NotificationItem | null>(null);
  const [intraClaimOpen, setIntraClaimOpen] = useState(false);

  const readNotification = useReadNotification();
  const logoutOutMutation = useLogout();
  const { data: notifications } = useGetNotifications();
  const allReadNotifications = useAllReadNotifications();

  const unreadNotifications = notifications?.filter(
    (notification: NotificationItem) => notification.read_at === null
  );
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, []);
  const clickModalOpen = () => {
    setModalOpen(true);
  };

  const clickModalClose = () => {
    setModalOpen(false);
  };
  const searchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const openIntraClaimModal = (notification: NotificationItem) => {
    setIntraClaimOpen(true);
  };

  const handleClose = () => {
    setIntraClaimOpen(false);
  };

  const openDepartureDescriptionModal = (notification: NotificationItem) => {};

  return (
    <div>
      <div className="flex h-14 mb-3 p-2 gap-x-2 shadow-md  items-center justify-end">
        {["/windNote", "/question", "/timeLine"].includes(currentLocation) && (
          <button className="" onClick={searchClick}>
            <SearchIcon />
          </button>
        )}
        <button
          onClick={() => {
            logoutOutMutation.mutate();
            navigate("/login");
          }}
        >
          <LogoutIcon />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative">
              <NotificationsNoneIcon />
              <span className="absolute bg-red-500 text-gray-100 px-[0.8] py-[0.8] text-xs font-bold rounded-full -top-1 -right-3 min-w-[1.5rem] flex justify-center items-center">
                {unreadNotifications?.length > 0 && unreadNotifications?.length}
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <ScrollArea className=" h-48 w-64 rounded-md border">
              {notifications?.map((notification: NotificationItem) => (
                <DropdownMenuItem
                  key={notification.id}
                  className="border-b"
                  onClick={() => {
                    readNotification.mutate(notification.id);
                    setSelectedNotification(notification);
                    navigate("/mypage");
                  }}
                >
                  <div className="relative">
                    <div>{notification.data.comment}</div>
                    {!notification.read_at && (
                      <span className="absolute bg-red-500 -left-2 -top-1 rounded-sm w-2 h-2"></span>
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
              <div className=" text-center text-gray-500">通知は以上です</div>
              <Button
                className="w-full"
                onClick={() => allReadNotifications.mutate()}
              >
                全て既読にする
              </Button>
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          className="text-white bg-custom-green w-8 h-8 rounded-md mx-3"
          onClick={clickModalOpen}
        >
          <EditIcon />
        </button>

        <CreateModal
          modalOpen={modalOpen}
          clickModalClose={clickModalClose}
          currentLocation={currentLocation}
        />
      </div>
      {searchOpen === true && (
        <div className=" text-center mb-2 mx-4">
          <input
            className="w-full h-10  bg-custom-white rounded-md border border-gray-700 px-2"
            placeholder="検索"
          />
        </div>
      )}
      <IntraClaimModal
        open={intraClaimOpen}
        handleClose={handleClose}
        notification={selectedNotification}
      />
    </div>
  );
};

export default NoteHeader;
