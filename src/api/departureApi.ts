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

export const IntraApproveClaim = async () => {
  const { data } = await axios.post(
    "http://localhost:8000/api/approveClaim/20"
  );
  return data;
};

// export const noti = async () => {
//   const { data } = await axios.get(
//     "http://localhost:8000/api/notification/654b0338-2bb7-4cc4-9a53-56e56a834619"
//   );
//   return data;
// };
