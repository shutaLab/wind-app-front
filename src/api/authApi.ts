import axios from "axios";
import { User } from "../types/user";
axios.defaults.withCredentials = true;

axios.defaults.baseURL = "https://windap-api.vercel.app";
axios.defaults.withCredentials = true; // クッキーを共有するための設定

export const getUser = async () => {
  const { data } = await axios.get<User>("/api/user");
  return data;
};

export const getCsrfCookie = async () => {
  await axios.get("/sanctum/csrf-cookie");
};

// ログインリクエストを送信する関数
export const login = async (values: User) => {
  try {
    await getCsrfCookie();
    const response = await axios.post("/api/login", {
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
  const { data } = await axios.post<User>("/api/register", values);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post<User>("/api/logout");
  return data;
};

export const notification = async () => {
  const { data } = await axios.get("/api/notifications");
  return data;
};
