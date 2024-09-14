import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/departureApi";
import { toast } from "react-toastify";

export const useGetDepartures = (userId?: string, month?: string) => {
  return useQuery(["departures", userId, month], () =>
    api.getDepartures(userId, month)
  );
};

export const useCreateDepartureEvent = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createDepartureEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries("departures");
      queryClient.invalidateQueries("notifications");
      toast.success("作成しました");
    },
    onError: () => {
      toast.error("作成に失敗しました");
    },
  });
};

export const useShowDeparture = (id: number) => {
  return useQuery(["departures", id], () => api.showDeparture(id));
};
