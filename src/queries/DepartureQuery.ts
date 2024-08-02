import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/departureApi";
import { toast } from "react-toastify";

export const useGetDepartures = () => {
    return useQuery("departures", () => api.getDepartures());
};
