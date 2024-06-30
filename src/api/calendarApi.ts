import axios from "axios";
import { Calendar } from "../types/Calendar";

export const getCalendarEvent = async () => {
  const { data } = await axios.get<Calendar[]>(
    "http://localhost:8000/api/calendar"
  );
  return data;
};

export const createCalendarEvent = async (values: Calendar) => {
  const { data } = await axios.post<Calendar>(
    "http://localhost:8000/api/calendar",
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
