import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/userApi";
import { toast } from "react-toastify";
import { getUser } from "../api/authApi";

export const useGetSeniorUsers = () => {
  return useQuery("users", () => api.getSeniorUsers());
};

export const useCreateUserProfile = (navigate: (path: string) => void) => {
  const queryClient = useQueryClient();

  return useMutation(api.createUserProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      toast.success("プロフィールを編集しました");
      navigate("/myPage/intra");
    },
    onError: () => {
      toast.error("プロフィールの編集に失敗しました");
    },
  });
};
