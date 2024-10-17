import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { DeleteNote, Note, NoteWithFavorites } from "../types/Note";
import WindNote from "../components/WindNote";
import { useQuery } from "react-query";
import { useNotes } from "../queries/NoteQuery";
import NoteHeader from "../components/NoteHeader";
import HeaderTab from "../components/HeaderTab";
import RequireAuth from "../components/RequireAuth";
const WindNoteList = () => {
  const { data: notes, status } = useNotes() as {
    data: NoteWithFavorites[] | undefined;
    status: string;
  };
  console.log(notes);

  return (
    <RequireAuth>
      <NoteHeader />
      <HeaderTab />
      <div>
        {status === "loading" ? (
          <div>Loading...</div>
        ) : status === "error" ? (
          <div className="">Error loading notes.</div>
        ) : (
          notes?.map((note) => <WindNote key={note.id} note={note} />)
        )}
      </div>
      <Footer />
    </RequireAuth>
  );
};

export default WindNoteList;
