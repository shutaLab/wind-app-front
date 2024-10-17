import React, { useState } from "react";
import { WindAnswer, WindIdQuestion } from "../types/Question";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import AnserModal from "../components/AnswerModal";
import { useShowQuestion } from "../queries/QuestionQuery";
import Answer from "../components/Answer";
import QuestionAlertDialog from "../components/QuestionAlertDialog";
import NoteHeader from "../components/NoteHeader";
import HeaderTab from "../components/HeaderTab";
import RequireAuth from "../components/RequireAuth";
const AnswerList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const { id } = useParams();
  const questionId = Number(id);
  const { data, isLoading } = useShowQuestion(questionId);
  console.log(data)
  const answers = data?.answers;
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

  if (isLoading) return <div>Loading...</div>;

  return (
    <RequireAuth>
      <NoteHeader />
      <HeaderTab />
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
          <p>{data?.content}</p>
        </div>
        <div className=" flex justify-end px-2">
          <p className="text-gray-500">回答数</p>
          <p className="text-gray-500">{answers?.length}</p>
          <button
            className="flex text-custom-blue font-nomal ml-3"
            onClick={clickAnswerOpen}
          >
            <p className="mr-1">回答する</p>
            <ChatBubbleOutlineIcon />
          </button>
        </div>
      </div>
      {answers?.map((answer: WindAnswer) => (
        <Answer answer={answer} />
      ))}
      <Footer />
      <AnserModal
        modalOpen={isAnswerOpen}
        clickModalClose={clickAnswerClose}
        question_id={questionId}
      />
      <QuestionAlertDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        questionId={questionId}
      />
    </RequireAuth>
  );
};

export default AnswerList;
