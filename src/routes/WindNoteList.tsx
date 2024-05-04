import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Note } from "../types/Note";
import WindNote from "../components/WindNote";
import Header from "../components/Header";
import { useQuery } from "react-query";
import { useNotes } from "../queries/TaskQuery";
const WindNoteList = () => {
  const { data: notes, status } = useNotes() as {
    data: Note[] | undefined;
    status: string;
  };
  if (!notes || notes.length <= 0) {
    <h1 className="text-4xl text-center text-red-400">ないです</h1>;
  }
  console.log(notes);
  return (
    <div>
      <Header />
      <div>
        {notes?.map((note) => (
          <WindNote note={note} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default WindNoteList;
