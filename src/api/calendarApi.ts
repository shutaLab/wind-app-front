import axios from "axios";
import { Calendar } from "../types/Calendar";

export const getCalendarEvent = async () => {
  const { data } = await axios.get<Calendar[]>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/calendar"
  );
  return data;
};

export const createCalendarEvent = async (values: Calendar) => {
  const { data } = await axios.post<Calendar>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/calendar",
    {
      title: values.title,
      content: values.content,
      start_date: values.start_date,
      end_date: values.end_date,
      is_absent: values.is_absent,
    }
  );
  return data;
};
