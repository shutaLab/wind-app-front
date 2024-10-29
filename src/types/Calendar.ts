export interface CreateCalendar {
  title: string;
  start: string;
  end: string;
  content?: string;
  is_absent?: boolean;
}
export interface Calendar {
  id: number;
  title: string;
  start: string;
  end: string;
  content?: string;
  is_absent?: boolean;
}
