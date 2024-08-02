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
export interface NoteWithFavorites {
  id: number;
  user_id: number;
  title: string;
  content: string;
  note_favorites: Favorite[];
}

export interface Favorite {
  user_id: number;
  note_id: number;
}
