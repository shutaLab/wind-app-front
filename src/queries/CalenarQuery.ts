import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/calendarApi";
import { toast } from "react-toastify";

export const useGetCalendarEvent = () => {
  return useQuery("calenarEvents", () => api.getCalendarEvent());
};

export const useCreateCalendaarEvent = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createCalendarEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries("calenarEvents");
      toast.success("作成しました");
    },
    onError: () => {
      toast.error("作成に失敗しました");
    },
  });
};
