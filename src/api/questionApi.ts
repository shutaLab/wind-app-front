import axios from "axios";
import {
  WindIdQuestion,
  WindQuestion,
  WindQuestiondayo,
} from "../types/Question";

export const getQuestions = async () => {
  const { data } = await axios.get<WindQuestion[]>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/question"
  );
  return data;
};

export const createQuestion = async (values: WindQuestion) => {
  const { data } = await axios.post<WindQuestion>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/question",
    {
      content: values.content,
    }
  );
  return data;
};

export const showQuestion = async (id: number) => {
  const { data } = await axios.get<WindQuestiondayo>(
    `https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/question/${id}`
  );
  return data;
};

export const updateQuestion = async ({
  id,
  values,
}: {
  id: number;
  values: WindQuestion;
}) => {
  const { data } = await axios.put<WindQuestion>(
    `https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/question/${id}`,
    values
  );
  return data;
};

export const deleteQuestion = async (id: number) => {
  const { data } = await axios.delete<WindIdQuestion>(
    `https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/question/${id}`
  );
  return data;
};
