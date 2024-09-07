import axios from "axios";
import { DepartureType } from "../types/Departure";

export const getDepartures = async () => {
  const { data } = await axios.get<DepartureType[]>(
    "http://localhost:8000/api/departures"
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

export const IntraApproveClaim = async (id: number) => {
  const { data } = await axios.post(
    `http://localhost:8000/api/approveClaim/${id}`
  );
  return data;
};

export const rejectIntraClaim = async (id: number) => {
  const { data } = await axios.post(
    `http://localhost:8000/api/rejectClaim/${id}`
  );
  return data;
};
