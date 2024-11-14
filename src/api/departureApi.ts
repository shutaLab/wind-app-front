import axios from "axios";
import {
  DepartureRankingType,
  DepartureStatus,
  DepartureType,
  DepartureWithTotalTime,
} from "../types/Departure";

export const getDepartures = async (
  userId?: number,
  year?: string,
  month?: string,
  date?: string
) => {
  try {
    const { data } = await axios.get(
      "https://api.windap.jp/api/api/departures",
      {
        params: { user_id: userId, year, month, date },
      }
    );
    return data;
  } catch (error: any) {
    // エラーメッセージを表示
    const message =
      error.response?.data?.message || "データの取得に失敗しました";
    throw new Error(message);
  }
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

export const getDepartureRanking = async (year?: string, month?: string) => {
  const { data } = await axios.get<DepartureRankingType[]>(
    "https://api.windap.jp/api/api/departures/rankings",
    {
      params: {
        year: year,
        month: month,
      },
    }
  );
  return data;
};

export const getDepartureStatus = async () => {
  const { data } = await axios.get<DepartureStatus>(
    "https://api.windap.jp/api/api/departures/status"
  );
  return data;
};
