import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { DeleteNote, Note } from "../types/Note";
import WindNote from "../components/WindNote";
import { useQuery } from "react-query";
import { useNotes } from "../queries/NoteQuery";
import NoteHeader from "../components/NoteHeader";
import HeaderTab from "../components/HeaderTab";
const WindNoteList = () => {
  const { data: notes, status } = useNotes() as {
    data: DeleteNote[] | undefined;
    status: string;
  };
  console.log(notes);
  return (
    <div>
      <NoteHeader />
      <HeaderTab />
      <div>
        {notes?.map((note) => (
          <WindNote key={note.id} note={note} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default WindNoteList;
