import { User } from "./user";

export interface WindQuestion {
  content: string;
}

export interface WindIdQuestion {
  id: number;
  content: string;
  answers: WindAnswer[];
  user: User;
}

export interface WindAnswer {
  content: string;
}
export interface WindIdAnswer {
  id: number;
  content: string;
  question_id: number;
}
