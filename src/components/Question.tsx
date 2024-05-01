import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const Question = () => {
  return (
    <div>
      <div className="border-b-2 py-4">
        <div className="flex justify-between px-3 ">
          <p className=" bg-red-600 rounded-lg text-white text-sm text-center w-[15%]">
            30分前
          </p>
          <MoreHorizIcon className=" text-gray-600" />
        </div>
        <div className="px-3 mt-5">
          <p>質問が入ります質問が入ります</p>
        </div>
        <div className=" flex justify-end px-2">
          <button className="flex text-custom-blue font-nomal">
            <p className="mr-1">回答する</p>
            <ChatBubbleOutlineIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
