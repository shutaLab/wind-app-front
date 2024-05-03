import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Avatar } from "@mui/material";
import { Note } from "../types/Note";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import { Button } from "../@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../@/components/ui/alert-dialog";

const WindNote = ({ note }: { note: Note }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="">
      <div className="border-b p-2">
        <div className=" flex p-2 justify-between">
          <div className="">
            <h1 className=" font-bold text-lg">{note.title}</h1>
            <p>{note.content}</p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <MoreHorizIcon className=" text-gray-600" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem
                  className="text-gray-600"
                  onSelect={openDialog}
                >
                  削除
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-600">
                  編集
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex">
          <FavoriteBorderIcon className="text-gray-500 mr-1" />
          <p className="mr-2">3</p>
          <BookmarkBorderIcon className="text-gray-500 mr-2" />
          <p className="flex mr-2">
            <Avatar sx={{ height: "25px", width: "25px" }} />
            <p className="text-gray-500 ml-2">山田脩太</p>
          </p>
          <p className="text-gray-500">4月20日</p>
        </div>
      </div>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="w-[90%] rounded-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className=" font-normal">
              本当に削除しますか？
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeDialog}>
              キャンセル
            </AlertDialogCancel>
            <AlertDialogAction onClick={closeDialog}>削除</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default WindNote;
