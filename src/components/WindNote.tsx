import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Avatar } from "@mui/material";
import { DeleteNote, Note, NoteWithFavorites } from "../types/Note";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import EditNoteModal from "./EditNoteModal";

import {
  useDeleteNote,
  useCheckFavorite,
  useUpdateFavorite,
  useUpdateNote,
} from "../queries/NoteQuery";
import { Link } from "react-router-dom";
import DeleteAlertDialog from "./DeleteAlertDialog";

const WindNote = ({ note }: { note: NoteWithFavorites }) => {
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

  const updateFavorite = useUpdateFavorite();
  const { data: favorite } = useCheckFavorite(note.id);
  const isFavorite = favorite && Object.keys(favorite).length > 0;
  const handleFavoriteClick = () => {
    updateFavorite.mutate(note.id);
  };
  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <>
      <div className="border-b p-2">
        <div className=" flex p-2 justify-between">
          <Link to={`/windNote/${note.id}`}>
            <h1 className=" font-bold text-lg">{note.title}</h1>
            <p className="">{truncateText(note.content, 15)}</p>
          </Link>
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
        <div className="flex items-center">
          <p className="mr-2"></p>

          <button
            onClick={() => {
              handleFavoriteClick();
            }}
          >
            {isFavorite ? (
              <FavoriteIcon className="text-red-500 mr-1" />
            ) : (
              <FavoriteBorderIcon className="text-gray-500 mr-1" />
            )}
          </button>
          <p className="mr-2 w-[1em]">
            {note.note_favorites.length > 0 ? note.note_favorites.length : ""}
          </p>
          <button>
            <BookmarkBorderIcon className="text-gray-500 mr-2" />
          </button>
          <p className="flex mr-2">
            <Avatar sx={{ height: "25px", width: "25px" }} />
            <p className="text-gray-500 ml-2">山田脩太</p>
          </p>
          <p className="text-gray-500">4月20日</p>
        </div>
      </div>
      <DeleteAlertDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        noteId={note.id}
      />
      <EditNoteModal
        modalOpen={modalOpen}
        clickModalClose={clickModalClose}
        note={note}
      />
    </>
  );
};

export default WindNote;
