import axios from "axios";
import { User } from "../types/user";

export const getUser = async () => {
  const { data } = await axios.get<User>("https://windap-api.vercel.app/api/api/user");
  return data;
};

export const getSeniorUsers = async () => {
  const { data } = await axios.get<User[]>(
    "https://windap-api.vercel.app/api/api/users/gradeFilter"
  );
  return data;
};
