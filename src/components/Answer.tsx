import React from "react";
import { Avatar } from "@mui/material";
import { WindAnswer } from "../types/Question";

interface AnswerProps {
  answer: WindAnswer;
}

const Answer: React.FC<AnswerProps> = ({ answer }) => {
  return (
    <>
      <div className="p-3 border-b-2">
        <div className="flex items-center mb-2">
          <Avatar />
          <p className="ml-3 text-xl font-bold text-custom-blue">山田脩太</p>
        </div>
        <div>
          <p className=" text-gray-500 whitespace-pre-line break-all">
            {answer.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Answer;
