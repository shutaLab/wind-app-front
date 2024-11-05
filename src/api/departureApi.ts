import axios from "axios";
import { DepartureType, DepartureWithTotalTime } from "../types/Departure";

export const getDepartures = async (
  userId?: number,
  year?: string,
  month?: string,
  date?: string
) => {
  const { data } = await axios.get<DepartureWithTotalTime>(
    "https://api.windap.jp/api/api/departures",
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
    "https://api.windap.jp/api/api/departure",
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
    `https://api.windap.jp/api/api/departure/${id}`
  );
  return data;
};

// http://localhost:8000
