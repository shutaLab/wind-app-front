import axios from "axios";
import { User } from "../types/user";

export const getUser = async () => {
  const { data } = await axios.get<User>("https://api.windap.jp/api/api/windNote/api/user");
  return data;
};

export const getSeniorUsers = async () => {
  const { data } = await axios.get<User[]>(
    "https://api.windap.jp/api/api/windNote/api/users/gradeFilter"
  );
  return data;
};