import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Avatar } from "@mui/material";
const WindNote = () => {
  return (
    <div className="">
      <div className="border-b p-2">
        <div className=" flex p-2">
          <div className="">
            <h1 className=" font-bold text-lg">リーパン辛すぎた</h1>
            <p>内容が入ります内容が入ります内容が入ります内容が入ります</p>
          </div>
          <div>
            <MoreHorizIcon className=" text-gray-600" />
          </div>
        </div>
        <div className="flex">
          <FavoriteBorderIcon className="text-gray-500 mr-1" />
          <p className="mr-2">3</p>
          <BookmarkBorderIcon className="text-gray-500 mr-2" />
          <p className="flex mr-2">
            <Avatar sx={{ height: "25px", width: "25px" }} />
            <p className="text-gray-500 ml-2">山田脩太</p>
          </p>
          <p className="text-gray-500">4月20日</p>
        </div>
      </div>
    </div>
  );
};

export default WindNote;
