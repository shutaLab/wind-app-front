import axios from "axios";

export const getNotifications = async () => {
  const { data } = await axios.get("https://windap-api.vercel.app/api/api/notifications");
  return data;
};

export const readNotification = async (id: string) => {
  const { data } = await axios.post(
    `https://windap-api.vercel.app/api/api/notifications/${id}/read`
  );
  return data;
};
