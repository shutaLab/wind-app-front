import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { HomeOutlined } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
const Footer = () => {
  const [bnValue, setBnValue] = useState();
  const navigate = useNavigate();
  return (
    <div>
      <BottomNavigation
        showLabels={true}
        sx={{ position: "absolute", bottom: 0, width: "100%" }}
        value={bnValue}
        onChange={(event, value) => setBnValue(value)}
      >
        <BottomNavigationAction
          label="ホーム"
          value="home"
          onClick={() => navigate("/home")}
          icon={<HomeOutlined />}
        />
        <BottomNavigationAction
          label="出艇"
          value="departure"
          onClick={() => navigate("/departure")}
          icon={<TripOriginOutlinedIcon />}
        />
        <BottomNavigationAction
          label="マイページ"
          value="myPage"
          onClick={() => navigate("/myPage")}
          icon={<PersonOutlineOutlinedIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
