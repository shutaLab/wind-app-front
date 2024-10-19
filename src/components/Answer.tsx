import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { WindAnswer, WindIdAnswer } from "../types/Question";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import { useGetUser } from "../queries/UserQuery";
dayjs.extend(relativeTime);
dayjs.locale("ja");
interface AnswerProps {
  answer: WindIdAnswer;
}

const Answer: React.FC<AnswerProps> = ({ answer }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const clickModalOpen = () => {
    setModalOpen(true);
  };
  const clickModalClose = () => {
    setModalOpen(false);
  };

  const { data: user } = useGetUser();

  const relativeTimeFromNow = dayjs(answer.created_at).fromNow();
  console.log(user?.id === answer.user?.id);
  return (
    <div className="border-b p-2">
      <div className=" flex p-2 justify-between">
        <h1 className="">{answer.content}</h1>
        {user?.id === answer.user?.id && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <MoreVertIcon className=" text-gray-600" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem className="text-gray-600" onSelect={openDialog}>
                削除
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={clickModalOpen}
                className="text-gray-600"
              >
                編集
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <div className="flex items-center space-x-3">
        <p className="mr-2"></p>

        {/* <button
            onClick={() => {
              handleFavoriteClick();
            }}
          >
            {isFavorite ? (
              <FavoriteIcon className="text-red-500 mr-1" />
            ) : (
              <FavoriteBorderIcon className="text-gray-500 mr-1" />
            )}
          </button> */}
        <p className="flex">
          {/* <Avatar sx={{ height: "25px", width: "25px" }} /> */}
          <p className="text-gray-500 ">
            {/* {note.user?.user_profile?.name || "匿名ユーザー"} */}
          </p>
        </p>
        <p className="text-gray-500 w-[50%]">
          {dayjs(answer.created_at).format("YYYY年MM月DD日HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default Answer;
