import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EditQuestionModal from "./EditQuestionModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import AnserModal from "./AnswerModal";
import QuestionAlertDialog from "./QuestionAlertDialog";
import { WindIdQuestion } from "../types/Question";
import { Link } from "react-router-dom";
const Question = ({ question }: { question: WindIdQuestion }) => {
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
          <div className="bg-red-600  rounded-lg w-[15%] items-center my-auto">
            <p className=" text-white text-sm text-center ">30分前</p>
          </div>
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
          <Link to={`/question/${question.id}/answer`} className="">
            <p className="whitespace-pre-line break-all">{question.content}</p>
          </Link>
        </div>
        <div className=" flex justify-end px-2 text-gray-500">
          <p>回答数</p>
          <p>{question.answers.length}</p>
          <button
            className="flex text-custom-blue font-nomal ml-3"
            onClick={clickAnswerOpen}
          >
            <p className="mr-1">回答する</p>
            <ChatBubbleOutlineIcon />
          </button>
        </div>
      </div>
      <EditQuestionModal
        modalOpen={modalOpen}
        clickModalClose={clickModalClose}
        question={question}
      />
      <AnserModal
        modalOpen={isAnswerOpen}
        clickModalClose={clickAnswerClose}
        question_id={question.id}
      />
      <QuestionAlertDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        questionId={question.id}
      />
    </div>
  );
};

export default Question;
