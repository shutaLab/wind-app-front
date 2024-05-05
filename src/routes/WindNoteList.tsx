import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { DeleteNote, Note } from "../types/Note";
import WindNote from "../components/WindNote";
import Header from "../components/Header";
import { useQuery } from "react-query";
import { useNotes } from "../queries/TaskQuery";
const WindNoteList = () => {
  const { data: notes, status } = useNotes() as {
    data: DeleteNote[] | undefined;
    status: string;
  };
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
