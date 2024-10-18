import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/authApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(api.login, {
    onSuccess: (user) => {
      queryClient.invalidateQueries("user");
      toast.success("ログインしました");
    },
    onError: () => {
      toast.error("ログインに失敗しました");
    },
  });
};

export const useSignUp = () => {
  const queryClient = useQueryClient();
  return useMutation(api.signUp, {
    onSuccess: (user) => {
      queryClient.invalidateQueries("user");
      toast.success("サインアップしました");
      console.log(user);
    },
    onError: () => {
      toast.error("サインアップに失敗しました");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(api.logout, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      toast.success("ログアウトしました");
    },
    onError: () => {
      toast.error("ログアウトに失敗しました");
    },
  });
};
