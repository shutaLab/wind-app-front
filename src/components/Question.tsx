import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EditQuestionModal from "./EditQuestionModal";
import NoteAlertDialog from "./NoteAlertDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import AnserModal from "./AnswerModal";
const Question = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const clickModalOpen = () => {
    setModalOpen(true);
  };
  const clickModalClose = () => {
    setModalOpen(false);
  };
  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const clickAnswerOpen = () => {
    setIsAnswerOpen(true);
  };
  const clickAnswerClose = () => {
    setIsAnswerOpen(false);
  };

  return (
    <div>
      <div className="border-b-2 py-4">
        <div className="flex justify-between px-3 ">
          <p className=" bg-red-600 rounded-lg text-white text-sm text-center w-[15%]">
            30分前
          </p>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <MoreHorizIcon className=" text-gray-600" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem
                  className="text-gray-600"
                  onSelect={openDialog}
                >
                  削除
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={clickModalOpen}
                  className="text-gray-600"
                >
                  編集
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="px-3 my-5">
          <p>質問が入ります質問が入ります</p>
        </div>
        <div className=" flex justify-end px-2">
          <div className="flex text-gray-500">
            <p>回答数</p>
            <p>1</p>
          </div>
          <button
            className="flex text-custom-blue font-nomal ml-3"
            onClick={clickAnswerOpen}
          >
            <p className="mr-1">回答する</p>
            <ChatBubbleOutlineIcon />
          </button>
        </div>
      </div>
      <NoteAlertDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
      <EditQuestionModal
        modalOpen={modalOpen}
        clickModalClose={clickModalClose}
      />
      <AnserModal modalOpen={isAnswerOpen} clickModalClose={clickAnswerClose} />
    </div>
  );
};

export default Question;
