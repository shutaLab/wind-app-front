import React from "react";
import { useGetUser } from "../queries/UserQuery";
import { useGetAnswers } from "../queries/AnswerQuery";
import Answer from "./Answer";

const MyPageAnswerList = () => {
  const { data: user } = useGetUser();
  const { data: answers, isLoading, isFetching } = useGetAnswers(user?.id);
  return (
    <div className="mb-5">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>{answers?.map((answer) => <Answer answer={answer} />)}</>
        )}
      </div>
    </div>
  );
};

export default MyPageAnswerList;
