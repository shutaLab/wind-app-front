import { User } from "./user";

export interface DepartureType {
  id?: number;
  date: string;
  start: string;
  end: string;
  intra_user_id?: number;
  intra_user?: User;
  description?: string;
  user?: User;
}

export interface DepartureWithTotalTime {
  departures: DepartureType[];
  total_time?: string;
  total_items: string;
  total_pages: string;
  current_pages: string;
}
