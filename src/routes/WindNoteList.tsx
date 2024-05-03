import React, { useEffect, useState } from "react";
import Button from "../components/Button";

// import Button from "../components/Button";
import Footer from "../components/Footer";
import axios from "axios";
import { Note } from "../types/Note";
import WindNote from "../components/WindNote";
import Header from "../components/Header";
import { DatePickerForm } from "../components/DateSelect";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

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
        {notes.map((note) => (
          <WindNote note={note} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default WindNoteList;
