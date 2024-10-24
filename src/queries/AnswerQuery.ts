import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/answerApi";
import { toast } from "react-toastify";

export const useGetAnswers = (userId?: number) => {
  return useQuery(["answers", userId], () => api.getAnswers(userId));
};

export const useCreateAnswer = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createAnswer, {
    onSuccess: () => {
      queryClient.invalidateQueries("question");
      queryClient.invalidateQueries("answers");
      toast.success("回答しました");
    },
    onError: () => {
      toast.error("回答に失敗しました");
    },
  });
};
