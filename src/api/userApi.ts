import axios from "axios";
import { Profile, User } from "../types/user";
import { API_ROUTES, apiClient } from "./commonApi";

export const getSeniorUsers = async () => {
  const { data } = await apiClient.get<User[]>(API_ROUTES.USER.SENIOR_USERS);
  return data;
};

export const createUserProfile = async (values: Profile) => {
  const { data } = await apiClient.post<Profile>(API_ROUTES.USER.PROFILE, {
    name: values.name,
    grade: values.grade,
    sail_no: values.sail_no,
    introduction: values.introduction,
    profile_image: values.profile_image,
  });
  return data;
};
