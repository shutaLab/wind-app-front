import axios from "axios";
import { WindQuestion } from "../types/Question";

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
