import axios from "axios";
import { Calendar } from "../types/Calendar";

export const getCalendarEvent = async () => {
  const { data } = await axios.get<Calendar[]>(
    "https://windap-api.vercel.app/api/calendar"
  );
  return data;
};

export const createCalendarEvent = async (values: Calendar) => {
  const { data } = await axios.post<Calendar>(
    "https://windap-api.vercel.app/api/calendar",
    {
      title: values.title,
      content: values.content,
      start: values.start,
      end: values.end,
      is_absent: values.is_absent,
    }
  );
  return data;
};
