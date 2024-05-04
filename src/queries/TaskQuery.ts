import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Note } from "../types/Note";
import * as api from "../api/noteApi";

export const useNotes = () => {
  return useQuery("notes", () => api.getNotes());
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
};
export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation(api.deleteNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
};
