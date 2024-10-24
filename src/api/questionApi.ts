import axios from "axios";
import { WindIdQuestion, WindQuestion } from "../types/Question";

export const getQuestions = async (userId?: number) => {
  const { data } = await axios.get<WindIdQuestion[]>(
    "http://localhost:8000/api/question",
    {
      params: {
        user_id: userId,
      },
    }
  );
  return data;
};

export const createQuestion = async (values: WindQuestion) => {
  const { data } = await axios.post<WindQuestion>(
    "http://localhost:8000/api/question",
    {
      content: values.content,
    }
  );
  return data;
};

export const showQuestion = async (id: number) => {
  const { data } = await axios.get<WindIdQuestion>(
    `http://localhost:8000/api/question/${id}`
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
    `http://localhost:8000/api/question/${id}`,
    values
  );
  return data;
};

export const deleteQuestion = async (id: number) => {
  const { data } = await axios.delete<WindIdQuestion>(
    `http://localhost:8000/api/question/${id}`
  );
  return data;
};
