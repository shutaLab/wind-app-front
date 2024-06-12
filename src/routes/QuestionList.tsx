import React from "react";
import Question from "../components/Question";
import Footer from "../components/Footer";
import { useQuestions } from "../queries/QuestionQuery";
import { WindIdQuestion, WindQuestion } from "../types/Question";
import NoteHeader from "../components/NoteHeader";
import HeaderTab from "../components/HeaderTab";

const QuestionList = () => {
  const { data: questions } = useQuestions() as {
    data: WindIdQuestion[] | undefined;
  };
  console.log(questions);
  return (
    <div>
      <NoteHeader />
      <HeaderTab />
      <div>
        {questions?.map((question) => (
          <Question question={question} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default QuestionList;
