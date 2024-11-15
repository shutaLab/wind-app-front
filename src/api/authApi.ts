import axios from "axios";
import { User } from "../types/user";
import { API_ROUTES, apiClient } from "./commonApi";
axios.defaults.withCredentials = true;

export const getUser = async () => {
  const { data } = await apiClient.get<User>(API_ROUTES.AUTH.USER);
  return data;
};

export const getCsrfCookie = async () => {
  await apiClient.get(API_ROUTES.AUTH.CSRF);
};

// ログインリクエストを送信する関数
export const login = async (values: User) => {
  try {
    await getCsrfCookie();
    const response = await apiClient.post(API_ROUTES.AUTH.LOGIN, {
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
  const { data } = await apiClient.post<User>(API_ROUTES.AUTH.REGISTER, values);
  return data;
};

export const logout = async () => {
  const { data } = await apiClient.post<User>(API_ROUTES.AUTH.LOGOUT);
  return data;
};
