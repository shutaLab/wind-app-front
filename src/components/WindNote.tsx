import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Avatar } from "@mui/material";
import { DeleteNote, Note } from "../types/Note";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import NoteAlertDialog from "./NoteAlertDialog";
import EditNoteModal from "./EditNoteModal";

const WindNote = ({ note }: { note: DeleteNote }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const clickModalOpen = () => {
    setModalOpen(true);
  };
  const clickModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="">
      <div className="border-b p-2">
        <div className=" flex p-2 justify-between">
          <div className="">
            <h1 className=" font-bold text-lg">{note.title}</h1>
            <p>{note.content}</p>
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
      <NoteAlertDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        noteId={note.id}
      />
      <EditNoteModal modalOpen={modalOpen} clickModalClose={clickModalClose} />
    </div>
  );
};

export default WindNote;
