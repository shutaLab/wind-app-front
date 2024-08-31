import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/notificationApi";
import { toast } from "react-toastify";

export const useGetNotifications = () => {
  return useQuery("notifications", () => api.getNotifications());
};
