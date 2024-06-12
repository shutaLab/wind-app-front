import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink, useLocation } from "react-router-dom";
import CreateModal from "./CreateModal";
import { Badge } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
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

  return (
    <div>
      <div className="flex h-14 mb-3 p-2 shadow-md  items-center justify-end">
        <button className="" onClick={searchClick}>
          <SearchIcon sx={{ width: "30px", height: "30px" }} />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="mx-3">
              <Badge badgeContent={2} color="error">
                <NotificationsNoneOutlinedIcon
                  sx={{ width: "30px", height: "30px" }}
                />
              </Badge>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="">
              <DropdownMenuItem>通知が入ります</DropdownMenuItem>
            </div>
            <DropdownMenuItem>通知が入ります</DropdownMenuItem>
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
