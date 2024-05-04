import axios from "axios";
import { Note } from "../types/Note";

export const getNotes = async () => {
  const { data } = await axios.get<Note[]>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/windNote"
  );
  return data;
};
export const createNote = async (values: Note) => {
  const { data } = await axios.post<Note>(
    "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/windNote",
    {
      title: values.title,
      content: values.content,
      //   date: values.date,
    }
  );
  return data;
};
