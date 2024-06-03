import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { HomeOutlined } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

const Footer = () => {
  const [bnValue, setBnValue] = useState<string | null>(null); // 初期値を null に設定
  const navigate = useNavigate();
  const location = useLocation();

  // マウント時に bnValue の初期値を設定
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setBnValue(path || "home");
  }, []);

  // URLパスの変更時に bnValue を更新
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setBnValue(path || "home");
  }, [location.pathname]);

  return (
    <div className="">
      <BottomNavigation
        sx={{ position: "fixed", bottom: 0, width: "100%" }}
        value={bnValue}
        onChange={(event, value) => {
          setBnValue(value);
          navigate(`/${value}`);
        }}
      >
        <BottomNavigationAction
          value="home"
          className="m-0 p-0"
          icon={<HomeOutlined />}
        />
        <BottomNavigationAction
          value="calendar"
          icon={<CalendarMonthOutlinedIcon />}
        />

        <BottomNavigationAction
          value="departure"
          icon={<TripOriginOutlinedIcon />}
        />
        <BottomNavigationAction
          value="windNote"
          icon={<EditNoteOutlinedIcon />}
        />
        <BottomNavigationAction
          value="myPage"
          icon={<PersonOutlineOutlinedIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
