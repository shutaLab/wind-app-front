import { useMutation, useQuery, useQueryClient } from "react-query";
import * as api from "../api/userApi";
import { toast } from "react-toastify";

export const useGetUser = () => {
  return useQuery("users", () => api.getUser());
};

export const useGetSeniorUsers = () => {
  return useQuery("users", () => api.getSeniorUsers());
};
