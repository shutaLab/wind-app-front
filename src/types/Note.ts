import { number } from "zod";

export interface Note {
  title: string;
  // date: Date | null;
  content: string;
}

export interface DeleteNote {
  id: number;
  title: string;
  content: string;
}

export interface Favorite {
  user_id: number;
  note_id: number;
}
