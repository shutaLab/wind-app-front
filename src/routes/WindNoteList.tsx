import React, { useEffect, useState } from "react";
import Button from "../components/Button";

// import Button from "../components/Button";
import WindNote from "../components/WindNote";
import Footer from "../components/Footer";
import axios from "axios";
import { Note } from "../types/Note";
import { DatePicker, Modal } from "antd";
import AutoAdjustTextarea from "../components/AutoTextArea";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const WindNoteList = () => {
  const getNote = async () => {
    const { data } = await axios.get<Note[]>(
      "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/windNote"
    );
    setNotes(data);
  };

  const [notes, setNotes] = useState<Note[]>([]);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    getNote();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          className="text-white bg-custom-green"
          text="ノートを追加"
          onClick={handleClickOpen}
        />
        <Dialog
          sx={{ zIndex: 1 }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <h1 className="text-center mt-3">ノートを追加</h1>
          <DialogContent>
            <DialogContentText>
              <input
                className="border boerder-gray-400 w-full "
                placeholder="タイトル"
              />
              <AutoAdjustTextarea className="my-4" placeholder="内容" />
              <DatePicker className="w-full" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} text="キャンセル" />
            <Button
              className="bg-custom-green text-white"
              onClick={handleClose}
              text="追加"
            />
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <WindNote notes={notes} />
        <p>
          {notes.map((note) => (
            <p>{note.title}</p>
          ))}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default WindNoteList;
