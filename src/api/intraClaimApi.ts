import axios from "axios";
import { IntraClaimType } from "../types/IntraClaim";

export const getIntraClaims = async () => {
  const { data } = await axios.get<IntraClaimType[]>(
    "https://windap-api.vercel.app/api/intraClaims"
  );
  return data;
};

export const showIntraClaim = async (id: number) => {
  const { data } = await axios.get<IntraClaimType>(
    `https://windap-api.vercel.app/api/intraClaim${id}`
  );
  return data;
};

export const IntraApproveClaim = async (id: number) => {
  const { data } = await axios.post(
    `https://windap-api.vercel.app/api/approveClaim/${id}`
  );
  return data;
};

export const rejectIntraClaim = async (id: number) => {
  const { data } = await axios.post(
    `https://windap-api.vercel.app/api/rejectClaim/${id}`
  );
  return data;
};
