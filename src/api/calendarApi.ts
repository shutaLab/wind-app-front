import axios from "axios";
import { Calendar, CreateCalendar } from "../types/Calendar";

export const getCalendarEvent = async () => {
  const { data } = await axios.get<Calendar[]>(
    "http://localhost:8000/api/calendar"
  );
  return data;
};

export const createCalendarEvent = async (values: CreateCalendar) => {
  const { data } = await axios.post<CreateCalendar>(
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

export const deleteEvent = async (id: number) => {
  const { data } = await axios.delete<Calendar>(
    `http://localhost:8000/api/calendar/${id}`
  );
  return data;
};
