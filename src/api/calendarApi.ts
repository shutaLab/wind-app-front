import axios from "axios";
import { Calendar } from "../types/Calendar";

export const getCalendarEvent = async () => {
  const { data } = await axios.get<Calendar[]>(
    "https://windap-3ddf402c9faf.herokuapp.com/api/calendar"
  );
  return data;
};

export const createCalendarEvent = async (values: Calendar) => {
  const { data } = await axios.post<Calendar>(
    "https://windap-3ddf402c9faf.herokuapp.com/api/calendar",
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
