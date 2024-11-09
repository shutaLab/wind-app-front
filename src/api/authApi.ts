import axios from "axios";
import { User } from "../types/user";
axios.defaults.withCredentials = true;

export const getUser = async () => {
  const { data } = await axios.get<User>("https://api.windap.jp/api/api/user");
  return data;
};

export const getCsrfCookie = async () => {
  await axios.get("https://api.windap.jp/api/sanctum/csrf-cookie");
};

// ログインリクエストを送信する関数
export const login = async (values: User) => {
  try {
    await getCsrfCookie();
    const response = await axios.post("https://api.windap.jp/api/api/login", {
      email: values.email,
      password: values.password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const signUp = async (values: User) => {
  const { data } = await axios.post<User>(
    "https://api.windap.jp/api/api/register",
    values
  );
  return data;
};

export const logout = async () => {
  const { data } = await axios.post<User>(
    "https://api.windap.jp/api/api/logout"
  );
  return data;
};

export const notification = async () => {
  const { data } = await axios.get(
    "https://api.windap.jp/api/api/notifications"
  );
  return data;
};
