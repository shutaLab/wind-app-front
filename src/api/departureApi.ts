import axios from "axios";
import { DepartureType, DepartureWithTotalTime } from "../types/Departure";

export const getDepartures = async (
  userId?: number,
  year?: string,
  month?: string,
  date?: string
) => {
  const { data } = await axios.get<DepartureWithTotalTime>(
    "http://localhost:8000/api/departures",
    {
      params: {
        user_id: userId,
        year: year,
        month: month,
        date: date,
      },
    }
  );
  return data;
};

export const createDepartureEvent = async (
  values: Omit<DepartureType, "date">
) => {
  const { data } = await axios.post<Omit<DepartureType, "date">>(
    "http://localhost:8000/api/departure",
    {
      intra_user_id: values.intra_user_id,
      start: values.start,
      end: values.end,
      description: values.description,
    }
  );
  return data;
};

export const showDeparture = async (id: number) => {
  const { data } = await axios.get<DepartureType>(
    `http://localhost:8000/api/departure/${id}`
  );
  return data;
};

// http://localhost:8000
