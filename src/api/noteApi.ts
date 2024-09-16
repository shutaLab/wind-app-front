import axios from "axios";
import { DeleteNote, Favorite, Note } from "../types/Note";

export const getNotes = async () => {
  const { data } = await axios.get<Note[]>(
    "https://windap-3ddf402c9faf.herokuapp.com/api/windNote"
  );
  return data;
};
export const createNote = async (values: Note) => {
  const { data } = await axios.post<Note>(
    "https://windap-3ddf402c9faf.herokuapp.com/api/windNote",
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
    `https://windap-3ddf402c9faf.herokuapp.com/api/windNote/${id}`
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
    `https://windap-3ddf402c9faf.herokuapp.com/api/windNote/${id}`,
    values
  );
  return data;
};
export const deleteNote = async (id: number) => {
  const { data } = await axios.delete<DeleteNote>(
    `https://windap-3ddf402c9faf.herokuapp.com/api/windNote/${id}`
  );
  return data;
};

export const getFavorites = async (id: number) => {
  const { data } = await axios.get<Favorite[]>(
    `https://windap-3ddf402c9faf.herokuapp.com/api/windNote/${id}/favorites`
  );
  return data;
};

export const checkFavorite = async (id: number) => {
  const { data } = await axios.get<Favorite>(
    `https://windap-3ddf402c9faf.herokuapp.com/api/windNote/${id}/favorite`
  );
  return data;
};

export const updateFavorite = async (id: number) => {
  const { data } = await axios.put<Favorite>(
    `https://windap-3ddf402c9faf.herokuapp.com/api/windNote/${id}/favorite`
  );
  return data;
};
