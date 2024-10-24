import axios from "axios";
import { WindAnswer, WindIdAnswer } from "../types/Question";

export const getAnswers = async (userId?: number) => {
  const { data } = await axios.get<WindIdAnswer[]>(
    "http://localhost:8000/api/answers",
    {
      params: {
        user_id: userId,
      },
    }
  );
  return data;
};

export const createAnswer = async ({
  question_id,
  values,
}: {
  question_id: number;
  values: WindAnswer;
}) => {
  const { data } = await axios.post<WindAnswer>(
    "http://localhost:8000/api/answer",
    {
      question_id: question_id,
      content: values.content,
    }
  );
  return data;
};
