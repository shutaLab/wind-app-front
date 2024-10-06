import axios from "axios";
import {
  WindIdQuestion,
  WindQuestion,
  WindQuestiondayo,
} from "../types/Question";

export const getQuestions = async () => {
  const { data } = await axios.get<WindQuestion[]>(
    "https://api.windap.jp/api/api/question"
  );
  return data;
};

export const createQuestion = async (values: WindQuestion) => {
  const { data } = await axios.post<WindQuestion>(
    "https://api.windap.jp/api/api/question",
    {
      content: values.content,
    }
  );
  return data;
};

export const showQuestion = async (id: number) => {
  const { data } = await axios.get<WindQuestiondayo>(
    `https://api.windap.jp/api/api/question/${id}`
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
    `https://api.windap.jp/api/api/question/${id}`,
    values
  );
  return data;
};

export const deleteQuestion = async (id: number) => {
  const { data } = await axios.delete<WindIdQuestion>(
    `https://api.windap.jp/api/api/question/${id}`
  );
  return data;
};
