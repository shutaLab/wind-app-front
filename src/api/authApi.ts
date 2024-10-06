import axios from "axios";
import { User } from "../types/user";
axios.defaults.withCredentials = true;

axios.defaults.withCredentials = true; // クッキーを共有するための設定

export const getUser = async () => {
  const { data } = await axios.get<User>("https://windap-api.vercel.app/api/api/user");
  return data;
};

export const getCsrfCookie = async () => {
  await axios.get("https://windap-api.vercel.app/sanctum/csrf-cookie");
};

// ログインリクエストを送信する関数
export const login = async (values: User) => {
  try {
    await getCsrfCookie();
    const response = await axios.post("https://windap-api.vercel.app/api/api/login", {
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
  const { data } = await axios.post<User>("https://windap-api.vercel.app/api/api/register", values);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post<User>("https://windap-api.vercel.app/api/api/logout");
  return data;
};

export const notification = async () => {
  const { data } = await axios.get("https://windap-api.vercel.app/api/api/notifications");
  return data;
};
