import axios from "axios";

export const getNotifications = async () => {
  const { data } = await axios.get(
    "https://windap-3ddf402c9faf.herokuapp.com/api/notifications"
  );
  return data;
};

export const readNotification = async (id: string) => {
  const { data } = await axios.post(
    `https://windap-3ddf402c9faf.herokuapp.com/api/notifications/${id}/read`
  );
  return data;
};
