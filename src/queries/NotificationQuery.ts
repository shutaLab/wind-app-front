import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/notificationApi";
import { toast } from "react-toastify";

export const useGetNotifications = () => {
  return useQuery("notifications", () => api.getNotifications());
};

export const useReadNotification = () => {
  const queryClient = useQueryClient();

  return useMutation(api.readNotification, {
    onSuccess: () => {
      queryClient.invalidateQueries("notifications");
    },
    onError: () => {
      toast.error("作成に失敗しました");
    },
  });
};
