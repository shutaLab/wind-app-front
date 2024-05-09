import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/questionApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useQuestions = () => {
  return useQuery("questions", () => api.getQuestions());
};

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("questions");
      toast.success("作成しました");
    },
    onError: () => {
      toast.error("登録に失敗しました");
    },
  });
};
