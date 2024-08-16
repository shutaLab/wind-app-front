import axios from "axios";
import { Departure } from "../types/Departure";

export const getDepartures = async () => {
  const { data } = await axios.get<Departure[]>(
    "http://localhost:8000/api/departures"
  );
  return data;
};

export const createDepartureEvent = async () => {
  const { data } = await axios.post<Departure>(
    "http://localhost:8000/api/departure",
    {
      intra_user_id: 5,
      start: "2024-08-11T11:46:21.000000Z",
      end: "2024-08-11T11:46:21.000000Z",
      description: "あいう",
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
