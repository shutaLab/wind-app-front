import React, { useEffect, useState } from "react";
import Button from "../components/Button";

// import Button from "../components/Button";
import Footer from "../components/Footer";
import axios from "axios";
import { Note } from "../types/Note";
import AutoAdjustTextarea from "../components/AutoTextArea";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DateSelect } from "../components/DateSelect";
import WindNote from "../components/WindNote";
import Header from "../components/Header";

const WindNoteList = () => {
  const getNote = async () => {
    const { data } = await axios.get<Note[]>(
      "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/windNote"
    );
    setNotes(data);
  };

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNote();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <WindNote />
        <WindNote />
        <WindNote />
        <p>
          {/* {notes.map((note) => (
            <p>{note.title}</p>
          ))} */}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default WindNoteList;
