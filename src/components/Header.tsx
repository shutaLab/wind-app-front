import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import AutoAdjustTextarea from "./AutoTextArea";
import { DateSelect } from "./DateSelect";
import EditIcon from "@mui/icons-material/Edit";
import Button from "./Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
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
      <div className="flex h-14 mb-3 p-2 shadow-md  items-center justify-end">
        <div className="">
          {/* <input
            className="w-full shadow appearance-none border rounded py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:border-black h-full"
            placeholder="検索"
          /> */}
          <SearchIcon sx={{ width: "35px", height: "35px" }} />
        </div>
        <button
          className="text-white bg-custom-green w-10 h-10 rounded-md mx-3"
          onClick={handleClickOpen}
        >
          <EditIcon />
        </button>
        <Dialog
          sx={{ zIndex: 1 }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
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
      <div className="flex justify-center">
        <div className="p-1 border rounded-lg w-[20%] text-center mr-1">
          <Link to="">ノート</Link>
        </div>
        <div className="p-1 border rounded-lg w-[20%] text-center mr-1">
          <Link to="">質問</Link>
        </div>
        <div className="p-1 border rounded-lg w-[30%] text-center">
          <Link to="">タイムライン</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
