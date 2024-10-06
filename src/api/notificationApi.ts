import axios from "axios";

export const getNotifications = async () => {
  const { data } = await axios.get("https://api.windap.jp/api/api/windNote/api/notifications");
  return data;
};

export const readNotification = async (id: string) => {
  const { data } = await axios.post(
    `https://api.windap.jp/api/api/windNote/api/notifications/${id}/read`
  );
  return data;
};
