import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/departureApi";
import { toast } from "react-toastify";

export const useGetDepartures = () => {
  return useQuery("departures", () => api.getDepartures());
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

export const useIntraApproveClaim = () => {
  const queryClient = useQueryClient();

  return useMutation(api.IntraApproveClaim, {
    onSuccess: () => {
      queryClient.invalidateQueries("departures");
      queryClient.invalidateQueries("notifications");
      toast.success("イントラ依頼を承諾しました");
    },
    onError: () => {
      toast.error("承諾に失敗しました");
    },
  });
};

export const useRejectIntraClaim = () => {
  const queryClient = useQueryClient();

  return useMutation(api.rejectIntraClaim, {
    onSuccess: () => {
      queryClient.invalidateQueries("departures");
      queryClient.invalidateQueries("notifications");
      toast.success("イントラ依頼を取り下げました");
    },
    onError: () => {
      toast.error("取り下げに失敗しました");
    },
  });
};
