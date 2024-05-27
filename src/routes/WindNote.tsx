import React from "react";
import { useParams } from "react-router-dom";
import { useShowNote } from "../queries/NoteQuery";
import { Note } from "../types/Note";

const WindNote = () => {
  const { id } = useParams();
  const noteId = Number(id);
  const { data: note } = useShowNote(noteId) as {
    data: Note;
  };

  console.log(note);
  return (
    <div className="px-2">
      <h1 className=" text-2xl">{note?.title}</h1>
      <div>
        <p className="whitespace-pre-line break-words">{note?.content}</p>
      </div>
    </div>
  );
};

export default WindNote;
