import React from "react";
import Header from "../components/Header";
import Question from "../components/Question";
import Footer from "../components/Footer";

const QuestionList = () => {
  return (
    <div>
      <Header />
      <Question />
      <Question />
      <Question />
      <Footer />
    </div>
  );
};

export default QuestionList;
