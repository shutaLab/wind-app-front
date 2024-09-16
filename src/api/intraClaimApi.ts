import axios from "axios";
import { IntraClaimType } from "../types/IntraClaim";

export const getIntraClaims = async () => {
  const { data } = await axios.get<IntraClaimType[]>(
    "https://windap-3ddf402c9faf.herokuapp.com/api/intraClaims"
  );
  return data;
};

export const showIntraClaim = async (id: number) => {
  const { data } = await axios.get<IntraClaimType>(
    `https://windap-3ddf402c9faf.herokuapp.com/api/intraClaim${id}`
  );
  return data;
};

export const IntraApproveClaim = async (id: number) => {
  const { data } = await axios.post(
    `https://windap-3ddf402c9faf.herokuapp.com/api/approveClaim/${id}`
  );
  return data;
};

export const rejectIntraClaim = async (id: number) => {
  const { data } = await axios.post(
    `https://windap-3ddf402c9faf.herokuapp.com/api/rejectClaim/${id}`
  );
  return data;
};
