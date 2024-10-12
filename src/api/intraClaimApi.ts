import axios from "axios";
import { IntraClaimType } from "../types/IntraClaim";

export const getIntraClaims = async () => {
  const { data } = await axios.get<IntraClaimType[]>(
    "http://localhost:8000/api/intraClaims"
  );
  return data;
};

export const showIntraClaim = async (id: number) => {
  const { data } = await axios.get<IntraClaimType>(
    `http://localhost:8000/api/intraClaim${id}`
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
