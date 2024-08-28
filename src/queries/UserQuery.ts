import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/userApi";
import { toast } from "react-toastify";

export const useGetSeniorUsers = () => {
  return useQuery("users", () => api.getSeniorUsers());
};
