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
    "https://api.windap.jp/api/api/windNote/api/answer",
    {
      question_id: question_id,
      content: values.content,
    }
  );
  return data;
};
