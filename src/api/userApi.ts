import axios from "axios";
import { User } from "../types/user";

export const getUser = async () => {
  const { data } = await axios.get<User>(
    "https://windap-3ddf402c9faf.herokuapp.com/api/user"
  );
  return data;
};

export const getSeniorUsers = async () => {
  const { data } = await axios.get<User[]>(
    "https://windap-3ddf402c9faf.herokuapp.com/api/users/gradeFilter"
  );
  return data;
};
