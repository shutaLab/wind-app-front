import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import AutoAdjustTextarea from "./AutoTextArea";
import EditIcon from "@mui/icons-material/Edit";
import Button from "./Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink, useLocation } from "react-router-dom";
import CreateNoteModal from "./CreateNote";
import CreateModal from "./CreateModal";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();
  console.log(currentLocation);
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

      <div className="flex justify-center mb-3">
        <NavLink
          className="p-1 border rounded-lg w-[30%] text-center"
          to="/windNote"
        >
          ノート
        </NavLink>
        <NavLink
          className="p-1 border rounded-lg w-[30%] text-center ml-2"
          to="/question"
        >
          質問
        </NavLink>
        <NavLink
          className="p-1 border rounded-lg w-[30%] text-center ml-2"
          to="/timeline"
        >
          タイムライン
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
