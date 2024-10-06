import axios from "axios";
import {
  WindIdQuestion,
  WindQuestion,
  WindQuestiondayo,
} from "../types/Question";

export const getQuestions = async () => {
  const { data } = await axios.get<WindQuestion[]>(
    "https://windap-api.vercel.app/api/api/question"
  );
  return data;
};

export const createQuestion = async (values: WindQuestion) => {
  const { data } = await axios.post<WindQuestion>(
    "https://windap-api.vercel.app/api/api/question",
    {
      content: values.content,
    }
  );
  return data;
};

export const showQuestion = async (id: number) => {
  const { data } = await axios.get<WindQuestiondayo>(
    `https://windap-api.vercel.app/api/api/question/${id}`
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
    `https://windap-api.vercel.app/api/api/question/${id}`,
    values
  );
  return data;
};

export const deleteQuestion = async (id: number) => {
  const { data } = await axios.delete<WindIdQuestion>(
    `https://windap-api.vercel.app/api/api/question/${id}`
  );
  return data;
};
