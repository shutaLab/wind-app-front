// import { Dialog, DialogContent } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DeleteNote, Note } from "../types/Note";
import { zodResolver } from "@hookform/resolvers/zod";
import { NoteValidationShema } from "../@/components/ui/validationSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import { Input } from "../@/components/ui/input";
import { Button } from "../@/components/ui/button";
import { ShadTextarea } from "../@/components/ui/textarea";
import { useUpdateNote } from "../queries/NoteQuery";

interface EditNoteModalProps {
  modalOpen: boolean;
  clickModalClose: () => void;
  note: DeleteNote;
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({
  modalOpen,
  clickModalClose,
  note,
}) => {
  const updateNote = useUpdateNote();

  function onSubmit(values: z.infer<typeof NoteValidationShema>) {
    console.log(values);
    updateNote.mutate({ id: note.id, values: values });
    clickModalClose();
  }

  const form = useForm<Note>({
    resolver: zodResolver(NoteValidationShema),
    defaultValues: {
      title: note.title,
      content: note.content,
    },
  });

  return (
    <div>
      {/* <Dialog
        open={modalOpen}
        onClose={clickModalClose}
        maxWidth="xl"
        fullWidth
      >
        <DialogContent>
          <Form {...form}>
            <h1 className="mb-4 text-center font-bold">ノートを編集する</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        defaultValue={note.title}
                        placeholder="タイトル"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                defaultValue={note.content}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ShadTextarea {...field} placeholder="内容" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end items-center">
                <a onClick={clickModalClose}>キャンセル</a>
                <Button className="ml-3 bg-custom-green" type="submit">
                  編集する
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default EditNoteModal;
