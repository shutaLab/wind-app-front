import React from "react";
import Button from "./Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import AutoAdjustTextarea from "./AutoTextArea";
import { DateSelect } from "./DateSelect";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="flex h-12 justify-around mb-3 p-1 shadow-md">
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
            </DialogContentText>
            <DateSelect />
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
    </div>
  );
};

export default Header;
