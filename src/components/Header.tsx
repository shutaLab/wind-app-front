import { Avatar } from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const Header = () => {
  return (
    <div>
      <div className="flex h-14 mb-3 p-2 shadow-md items-center justify-end">
        <button className="mr-3">
          <NotificationsNoneIcon
            className=" text-gray-400"
            sx={{ fontSize: 33 }}
          />
        </button>
        <button>
          <Avatar sx={{ width: 33, height: 33 }} />
        </button>
      </div>
    </div>
  );
};

export default Header;
