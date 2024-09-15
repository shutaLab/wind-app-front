import { LinkBreak1Icon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full mt-[30px] bg-white border-solid border-t ">
      <div className="flex justify-center ">
        <NavLink
          id="footer"
          className="p-1 text-gray-600  text-center w-[20%]"
          to="/home"
        >
          <div className="flex justify-center flex-col items-center text-sm ">
            <div>
              <HomeOutlinedIcon />
            </div>
            <p className="text-xs">ホーム</p>
          </div>
        </NavLink>
        <NavLink
          id="footer"
          className="p-1 text-gray-600 text-center w-[20%]"
          to="/calendar"
        >
          <div className="flex justify-center flex-col items-center text-sm">
            <div>
              <CalendarMonthOutlinedIcon />
            </div>
            <p className="text-xs">カレンダー</p>
          </div>
        </NavLink>
        <NavLink
          id="footer"
          className="p-1 text-gray-600 text-center w-[20%]"
          to="/departure"
        >
          <div className="flex justify-center flex-col items-center text-sm">
            <div>
              <TripOriginIcon />
            </div>
            <p className="text-xs">出艇</p>
          </div>
        </NavLink>
        <NavLink
          id="footer"
          className="p-1 text-gray-600 text-center w-[20%]"
          to="/windNote"
        >
          <div className="flex justify-center flex-col items-center text-sm ">
            <div>
              <EditNoteOutlinedIcon />
            </div>
            <p className="text-xs">ノート</p>
          </div>
        </NavLink>
        <NavLink
          id="footer"
          className="p-1 text-gray-600 text-center w-[20%]"
          to="/myPage/intra"
        >
          <div className="flex justify-center flex-col items-center text-sm text-center">
            <div>
              <PermIdentityOutlinedIcon />
            </div>
            <p className="text-xs">マイページ</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
