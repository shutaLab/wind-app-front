import axios from "axios";
import { WindAnswer, WindIdAnswer } from "../types/Question";

export const createAnswer = async ({
  question_id,
  values,
}: {
  question_id: number;
  values: WindAnswer;
}) => {
  const { data } = await axios.post<WindAnswer>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/answer",
    {
      question_id: question_id,
      content: values.content,
    }
  );
  return data;
};
