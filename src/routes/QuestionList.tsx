import React from "react";
import Header from "../components/Header";
import Question from "../components/Question";
import Footer from "../components/Footer";
import { useQuestions } from "../queries/QuestionQuery";
import { WindIdQuestion, WindQuestion } from "../types/Question";

const QuestionList = () => {
  const { data: questions } = useQuestions() as {
    data: WindIdQuestion[] | undefined;
  };
  return (
    <div>
      <Header />
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
