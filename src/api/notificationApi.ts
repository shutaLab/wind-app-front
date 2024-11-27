import axios from "axios";
import { API_ROUTES, apiClient } from "./commonApi";

export const getNotifications = async () => {
  const { data } = await apiClient.get(API_ROUTES.NOTIFICATION.LIST);
  return data;
};

export const readNotification = async (id: string) => {
  try {
    const { data } = await apiClient.post(
      `${API_ROUTES.NOTIFICATION.READ}/${id}/read`
    );
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const allReadNotifications = async () => {
  const { data } = await apiClient.post(API_ROUTES.NOTIFICATION.ALL_READ);
  return data;
};
