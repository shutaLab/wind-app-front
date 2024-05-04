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
