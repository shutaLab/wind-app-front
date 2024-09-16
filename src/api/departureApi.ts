import axios from "axios";
import { DepartureType, DepartureWithTotalTime } from "../types/Departure";

export const getDepartures = async (
  userId?: string,
  year?: string,
  month?: string,
  date?: string,
  page?: string
) => {
  const { data } = await axios.get<DepartureWithTotalTime>(
    "https://windap-3ddf402c9faf.herokuapp.com/api/departures",
    {
      params: {
        user_id: userId,
        year: year,
        month: month,
        date: date,
        page: page,
      },
    }
  );
  return data;
};

export const createDepartureEvent = async (
  values: Omit<DepartureType, "date">
) => {
  const { data } = await axios.post<Omit<DepartureType, "date">>(
    "https://windap-3ddf402c9faf.herokuapp.com/api/departure",
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
    `https://windap-3ddf402c9faf.herokuapp.com/api/departure/${id}`
  );
  return data;
};
