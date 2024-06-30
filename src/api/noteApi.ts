import axios from "axios";
import { DeleteNote, Favorite, Note } from "../types/Note";

export const getNotes = async () => {
  const { data } = await axios.get<Note[]>(
    "http://localhost:8000/api/windNote"
  );
  return data;
};
export const createNote = async (values: Note) => {
  const { data } = await axios.post<Note>(
    "http://localhost:8000/api/windNote",
    {
      title: values.title,
      content: values.content,
      //   date: values.date,
    }
  );
  return data;
};

export const showNote = async (id: number) => {
  const { data } = await axios.get<Note>(
    `http://localhost:8000/api/windNote/${id}`
  );
  return data;
};

export const updateNote = async ({
  id,
  values,
}: {
  id: number;
  values: Note;
}) => {
  const { data } = await axios.put<Note>(
    `http://localhost:8000/api/windNote/${id}`,
    values
  );
  return data;
};
export const deleteNote = async (id: number) => {
  const { data } = await axios.delete<DeleteNote>(
    `http://localhost:8000/api/windNote/${id}`
  );
  return data;
};

export const showFavorite = async (id: number) => {
  const { data } = await axios.get<Favorite>(
    `http://localhost:8000/api/windNote/${id}/favorite`
  );
  return data;
};

export const updateFavorite = async (id: number) => {
  const { data } = await axios.get<Favorite>(
    `http://localhost:8000/api/windNote/${id}/favorite`
  );
  return data;
};
