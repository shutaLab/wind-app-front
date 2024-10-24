import React from "react";
import { useGetUser } from "../queries/UserQuery";
import { useQuestions } from "../queries/QuestionQuery";
import Question from "./Question";

const MyPageQuestionList = () => {
  const { data: user } = useGetUser();
  const { data: questions, isLoading, isFetching } = useQuestions(user?.id);

  return (
    <div className="mb-5">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {questions?.map((question) => (
              <Question question={question} user={user} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyPageQuestionList;
