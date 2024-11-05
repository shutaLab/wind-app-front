import axios from "axios";
import { IntraClaimType } from "../types/IntraClaim";

export const getIntraClaims = async () => {
  const { data } = await axios.get<IntraClaimType[]>(
    "https://api.windap.jp/api/api/intraClaims"
  );
  return data;
};

export const showIntraClaim = async (id: number) => {
  const { data } = await axios.get<IntraClaimType>(
    `https://api.windap.jp/api/api/intraClaim${id}`
  );
  return data;
};

export const IntraApproveClaim = async (id: number) => {
  const { data } = await axios.post(
    `https://api.windap.jp/api/api/approveClaim/${id}`
  );
  return data;
};

export const rejectIntraClaim = async (id: number) => {
  const { data } = await axios.post(
    `https://api.windap.jp/api/api/rejectClaim/${id}`
  );
  return data;
};
