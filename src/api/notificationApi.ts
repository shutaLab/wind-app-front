import axios from "axios";

export const getNotifications = async () => {
  const { data } = await axios.get("http://localhost:8000/api/notifications");
  return data;
};
