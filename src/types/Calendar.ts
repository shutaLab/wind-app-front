export interface Calendar {
  title: string;
  content?: string;
  start: string;
  end: string;
  is_absent?: boolean;
}

export interface CalendarId {
  id: number;
  title: string;
  content: string;
  start: string;
  end: string;
  is_absent: boolean;
}
