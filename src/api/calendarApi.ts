import axios from "axios";
import { CalendarType, CalendarWithoutId } from "../types/Calendar";

export const getCalendarEvent = async () => {
  const { data } = await axios.get<CalendarType[]>(
    "https://api.windap.jp/api/api/calendar"
  );
  return data;
};

export const createCalendarEvent = async (values: CalendarWithoutId) => {
  const { data } = await axios.post<CalendarWithoutId>(
    "https://api.windap.jp/api/api/calendar",
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

export const updateCalendarEvent = async ({
  id,
  values,
}: {
  id: number;
  values: CalendarWithoutId;
}) => {
  const { data } = await axios.put<CalendarWithoutId>(
    `https://api.windap.jp/api/api/calendar/${id}`,
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
  const { data } = await axios.delete<CalendarType>(
    `https://api.windap.jp/api/api/calendar/${id}`
  );
  return data;
};
