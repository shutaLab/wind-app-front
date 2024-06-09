export interface Calendar {
  id?: string;
  title: string;
  start: string;
  end: string;
  content?: string;
  is_absent?: boolean;
}

export interface CalendarId {
  id?: number;
  title: string;
  content: string;
  start: string;
  end: string;
  is_absent: boolean;
}
