import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Note } from "../types/Note";
import * as api from "../api/noteApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useNotes = () => {
  return useQuery("notes", () => api.getNotes());
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      toast.success("作成しました");
    },
    onError: () => {
      toast.error("登録に失敗しました");
    },
  });
};
export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation(api.deleteNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      toast.success("削除しました");
    },
    onError: () => {
      toast.error("削除に失敗しました");
    },
  });
};
