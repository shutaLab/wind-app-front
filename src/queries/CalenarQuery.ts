import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/calendarApi";
import { toast } from "react-toastify";

export const useGetCalendarEvent = () => {
  return useQuery("calendarEvents", () => api.getCalendarEvent());
};

export const useCreateCalendarEvent = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createCalendarEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries("calendarEvents");
      toast.success("作成しました");
    },
    onError: () => {
      toast.error("作成に失敗しました");
    },
  });
};

export const useUpdateCalendarEvent = () => {
  const queryClient = useQueryClient();

  return useMutation(api.updateCalendarEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries("calendarEvents");
      toast.success("カレンダーを編集しました");
    },
    onError: () => {
      toast.error("カレンダーの編集に失敗しました");
    },
  });
};

export const useDeleteCalendarEvent = () => {
  const queryClient = useQueryClient();

  return useMutation(api.deleteEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries("calendarEvents");
      toast.success("削除しました");
    },
    onError: () => {
      toast.error("削除に失敗しました");
    },
  });
};
