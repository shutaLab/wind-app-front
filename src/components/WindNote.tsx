import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { NoteWithFavorites } from "../types/Note";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import EditNoteModal from "./EditNoteModal";
import DeleteAlertDialog from "./DeleteAlertDialog";
import { Link } from "react-router-dom";
// import { useCheckFavorite, useUpdateFavorite } from "../queries/NoteQuery";
import { User } from "../types/user";
import dayjs from "dayjs";

const WindNote = ({ note, user }: { note: NoteWithFavorites; user?: User }) => {
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

  // const updateFavorite = useUpdateFavorite();
  // const { data: favorite } = useCheckFavorite(note.id);
  // const isFavorite = favorite && Object.keys(favorite).length > 0;
  // const handleFavoriteClick = () => {
  //   updateFavorite.mutate(note.id);
  // };
  return (
    <>
      <div className="border-b p-2">
        <div className=" flex p-2 justify-between">
          <Link to={`/windNote/${note.id}`}>
            <h1 className=" font-bold text-lg">{note.title}</h1>
            <p className="">
              {note.content.length > 15
                ? `${note.content.slice(0, 15)}...`
                : note.content}
            </p>
          </Link>
          {user?.id === note.user?.id && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <MoreVertIcon className=" text-gray-600" />
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
        <div className="flex items-center justify-end space-x-3 text-gray-500">
          <p className="">{dayjs(note.date).format("YYYY年M月D日")}</p>
          <p className="flex">
            {/* <Avatar sx={{ height: "25px", width: "25px" }} /> */}
            <p className="text-gray-500">{note.user?.user_profile?.name}</p>
          </p>
          <div className="flex items-center">
            <button
            // onClick={() => {
            //   handleFavoriteClick();
            // }}
            >
              {/* {isFavorite ? ( */}
              {/* <FavoriteIcon className="text-red-500 mr-1" /> */}
              {/* ) : ( */}
              <FavoriteBorderIcon className="mr-1" />
              {/* )} */}
            </button>
            <p className="w-[1em]">
              {/* {note.note_favorites && note.note_favorites.length > 0
              ? note.note_favorites.length
              : ""} */}
              1
            </p>
            <button>
              <BookmarkBorderIcon className="" />
            </button>
          </div>
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
