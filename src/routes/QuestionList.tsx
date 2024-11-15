import React from "react";
import Question from "../components/Question";
import Footer from "../components/Footer";
import { useQuestions } from "../queries/QuestionQuery";
import { WindIdQuestion, WindQuestion } from "../types/Question";
import NoteHeader from "../components/NoteHeader";
import HeaderTab from "../components/HeaderTab";
import RequireAuth from "../components/RequireAuth";
import { useGetUser } from "../queries/AuthQuery";

const QuestionList = () => {
  const { data: user } = useGetUser();
  const { data: questions } = useQuestions() as {
    data: WindIdQuestion[] | undefined;
  };
  return (
    <RequireAuth>
      <NoteHeader />
      <HeaderTab />
      <div>
        {questions?.map((question) => (
          <Question question={question} user={user} />
        ))}
      </div>
      <Footer />
    </RequireAuth>
  );
};

export default QuestionList;
