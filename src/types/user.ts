export type User = {
  id?: number;
  email: string;
  password: string;
  profile?: UserProfile;
};

export type UserProfile = {
  name: string;
  grade: number;
  sailNo: string;
  introduction: string;
  profileImage: string;
};
