import axios from "axios";
import { User } from "../types/user";

export const getSeniorUsers = async () => {
  const { data } = await axios.get<User[]>(
    "http://localhost:8000/api/users/gradeFilter"
  );
  return data;
};
