import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useShowNote } from "../queries/NoteQuery";
import { Note, NoteWithFavorites } from "../types/Note";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Footer from "../components/Footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import AnserModal from "../components/AnswerModal";
import QuestionAlertDialog from "../components/QuestionAlertDialog";
import NoteAlertDialog from "../components/DeleteAlertDialog";
import EditNoteModal from "../components/EditNoteModal";
import NoteHeader from "../components/NoteHeader";
import HeaderTab from "../components/HeaderTab";
import RequireAuth from "../components/RequireAuth";
import { useGetUser } from "../queries/UserQuery";

const WindNote = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const { id } = useParams();
  const noteId = Number(id);
  const { data: note } = useShowNote(noteId);
  const { data: user, status } = useGetUser();
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
  console.log(user);
  return (
    <RequireAuth>
      <NoteHeader />
      <HeaderTab />
      <div className=" p-2 mb-[100px]">
        <div className="flex p-2 items-start justify-between">
          <div>
            <h1 className="font-bold text-lg">{note?.title}</h1>
            <p className="whitespace-pre-line break-all">{note?.content}</p>
          </div>
          {user?.id === note?.user.id && (
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
          )}
        </div>
        <div className="flex px-1">
          <FavoriteBorderIcon className="text-gray-500 mr-1" />
          <p className="mr-2">3</p>
          <BookmarkBorderIcon className="text-gray-500 mr-2" />
          <p className="flex mr-2">
            {/* <Avatar sx={{ height: "25px", width: "25px" }} /> */}
            <p className="text-gray-500 ml-2">山田脩太</p>
          </p>
          <p className="text-gray-500">4月20日</p>
        </div>
      </div>
      <Footer />
      <NoteAlertDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        noteId={noteId}
      />
      {/* <EditNoteModal
        modalOpen={modalOpen}
        clickModalClose={clickModalClose}
        note={note}
      /> */}
    </RequireAuth>
  );
};

export default WindNote;
