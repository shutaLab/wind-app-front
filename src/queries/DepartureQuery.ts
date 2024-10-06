import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/departureApi";
import { toast } from "react-toastify";

// export const useGetDepartures = (
//   userId?: string,
//   year?: string,
//   month?: string,
//   date?: string,
//   page?: string
// ) => {
//   return useQuery(["departures", userId, year, month, date, page], () =>
//     api.getDepartures(userId, year, month, date, page)
//   );
// };

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
