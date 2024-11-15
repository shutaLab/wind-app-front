import axios from "axios";
import { CalendarType, CalendarWithoutId } from "../types/Calendar";
import { API_ROUTES, apiClient } from "./commonApi";

export const getCalendarEvent = async () => {
  const { data } = await apiClient.get<CalendarType[]>(
    API_ROUTES.CALENDAR.LIST
  );
  return data;
};

export const createCalendarEvent = async (values: CalendarWithoutId) => {
  const { data } = await apiClient.post<CalendarWithoutId>(
    API_ROUTES.CALENDAR.BASE,
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
  const { data } = await apiClient.put<CalendarWithoutId>(
    `${API_ROUTES.CALENDAR.BASE}/${id}`,
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
  const { data } = await apiClient.delete<CalendarType>(
    `${API_ROUTES.CALENDAR.BASE}/${id}`
  );
  return data;
};
