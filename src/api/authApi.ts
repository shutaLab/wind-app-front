import axios from "axios";
import { User } from "../types/user";

export const getUser = async () => {
  const { data } = await axios.get<User>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/user"
  );
  return data;
};
export const getCsrfCookie = async () => {
  await axios.get(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/sanctum/csrf-cookie"
  );
};
// ログインリクエストを送信する関数
export const login = async (values: User) => {
  try {
    await getCsrfCookie();
    const response = await axios.post(
      "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/login",
      {
        email: values.email,
        password: values.password,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const signUp = async (values: User) => {
  const { data } = await axios.post<User>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/register",
    values
  );
  return data;
};

export const logout = async () => {
  const { data } = await axios.post<User>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/logout"
  );
  return data;
};
