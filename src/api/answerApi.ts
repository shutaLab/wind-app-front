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
    "https://windap-3ddf402c9faf.herokuapp.com/api/answer",
    {
      question_id: question_id,
      content: values.content,
    }
  );
  return data;
};
