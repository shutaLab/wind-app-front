import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink, useLocation } from "react-router-dom";
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
import { useLogout, useUser } from "../queries/AuthQuery";
import { useGetNotifications } from "../queries/NotificationQuery";
import { ScrollArea } from "../@/components/ui/scroll-area";
const NoteHeader = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();
  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, []);

  const clickModalOpen = () => {
    setModalOpen(true);
    console.log("モーダル");
  };

  const clickModalClose = () => {
    setModalOpen(false);
    console.log("キャンセル");
  };
  const searchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const logoutOutMutation = useLogout();
  const { data } = useGetNotifications();
  const notifications = data?.data;
  console.log(notifications);
  const { data: user, isLoading: userLoading, isError: userError } = useUser();
  console.log(user);
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
          }}
        >
          <LogoutIcon />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative">
              <NotificationsNoneIcon />
              <span className="absolute bg-red-500 text-gray-100 px-[0.8] py-[0.8] text-xs font-bold rounded-full -top-1 -right-3 min-w-[1.5rem] flex justify-center items-center">
                3
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <ScrollArea className=" h-48 w-48 rounded-md border">
              {notifications?.map((notification: any) => (
                <DropdownMenuItem
                  key={notification.id}
                  className="border-b"
                  onClick={() => {}}
                >
                  {notification.data.comment}
                </DropdownMenuItem>
              ))}
              <div className=" text-center text-gray-500">通知は以上です</div>
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
      {searchOpen == true && (
        <div className=" text-center mb-2 mx-4">
          <input
            className="w-full h-10  bg-custom-white rounded-md border border-gray-700 px-2"
            placeholder="検索"
          />
        </div>
      )}
    </div>
  );
};

export default NoteHeader;
