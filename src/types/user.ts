export type User = {
  id?: number;
  email: string;
  password: string;
  user_profile?: Profile;
};

export type Profile = {
  name: string;
  grade: string;
  sail_no: string;
  introduction?: string;
  profile_image?: string;
};
