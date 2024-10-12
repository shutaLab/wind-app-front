import axios from "axios";

export const getNotifications = async () => {
  const { data } = await axios.get("http://localhost:8000/api/notifications");
  return data;
};

export const readNotification = async (id: string) => {
  const { data } = await axios.post(
    `http://localhost:8000/api/notifications/${id}/read`
  );
  return data;
};
