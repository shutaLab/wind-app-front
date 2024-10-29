import { User } from "./user";

export interface CreateCalendar {
  title: string;
  start: string;
  end: string;
  content?: string;
  is_absent?: boolean;
}
export interface Calendar {
  id: number;
  user: User;
  title: string;
  start: string;
  end: string;
  content?: string;
  is_absent?: boolean;
}
