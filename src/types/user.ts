export type User = {
  id?: number;
  email: string;
  password: string;
  user_profile?: Profile;
};

export type Profile = {
  name: string;
  grade: number;
  sailNo: string;
  introduction: string;
  user_profileImage: string;
};
