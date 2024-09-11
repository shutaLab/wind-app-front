import axios from "axios";
import { User } from "../types/user";

export const getUser = async () => {
  const { data } = await axios.get<User>("http://localhost:8000/api/user");
  return data;
};

export const getSeniorUsers = async () => {
  const { data } = await axios.get<User[]>(
    "http://localhost:8000/api/users/gradeFiter"
  );
  return data;
};
