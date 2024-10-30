import { User } from "./user";

export interface CalendarWithoutId {
  title: string;
  start: string;
  end: string;
  content?: string;
  is_absent?: boolean;
}
export interface CalendarType {
  id: number;
  user: User;
  title: string;
  start: string;
  end: string;
  content?: string;
  is_absent?: boolean;
}
