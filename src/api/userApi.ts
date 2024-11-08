import axios from "axios";
import { Profile, User } from "../types/user";

export const getUser = async () => {
  const { data } = await axios.get<User>("https://api.windap.jp/api/user");
  return data;
};

export const getSeniorUsers = async () => {
  const { data } = await axios.get<User[]>(
    "https://api.windap.jp/api/users/gradeFilter"
  );
  return data;
};

export const createUserProfile = async (values: Profile) => {
  const { data } = await axios.post<Profile>(
    "https://api.windap.jp/api/profile",
    {
      name: values.name,
      grade: values.grade,
      sail_no: values.sail_no,
      introduction: values.introduction,
      profile_image: values.profile_image,
    }
  );
  return data;
};
