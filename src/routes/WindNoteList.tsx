import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Input } from "antd";
import Button from "../components/Button";
import WindNote from "../components/WindNote";
import Footer from "../components/Footer";
import axios from "axios";
import { Note } from "../types/Note";

const WindNoteList = () => {
  const getNote = async () => {
    const { data } = await axios.get<Note[]>(
      "http://localhost:8000/api/windNote"
    );
    setNotes(data);
  };

  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    getNote();
  }, []);
  return (
    <div>
      <div className="flex h-10 justify-around mb-3">
        <div className="w-[60%]">
          <input
            className="w-full shadow appearance-none border rounded py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:border-black h-full"
            placeholder="検索"
          />
        </div>
        <Button
          className="h-full w-[30%] bg-custom-black text-white"
          text="ノートを追加"
          type="button"
        />
      </div>
      <div>
        <WindNote notes={notes} />
      </div>
      <Footer />
    </div>
  );
};

export default WindNoteList;
