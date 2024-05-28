import React from "react";
import { useParams } from "react-router-dom";
import { useShowNote } from "../queries/NoteQuery";
import { Note } from "../types/Note";
import Header from "../components/Header";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
const WindNote = () => {
  const { id } = useParams();
  const noteId = Number(id);
  const { data: note } = useShowNote(noteId) as {
    data: Note;
  };

  console.log(note);
  return (
    <div className="">
      <Header />
      <div className=" p-2">
        <div className="flex p-2 items-start justify-between">
          <div>
            <h1 className="font-bold text-lg">{note?.title}</h1>
            <p className="whitespace-pre-line break-all">{note?.content}</p>
          </div>
          <button>
            <MoreHorizIcon />
          </button>
        </div>
        <div className="flex px-1">
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
