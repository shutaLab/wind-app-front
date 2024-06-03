import React from "react";
import { CreateHeaderModalProps } from "../types/ModalProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Note } from "../types/Note";
import { NoteValidationShema } from "../utils/validationSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import { z } from "zod";
import { ShadTextarea } from "../@/components/ui/textarea";
import { Button } from "../@/components/ui/button";
import { Input } from "../@/components/ui/input";
import { useCreateNote } from "../queries/NoteQuery";
const CreateNote: React.FC<CreateHeaderModalProps> = ({ clickModalClose }) => {
  const createNote = useCreateNote();
  const form = useForm<Note>({
    resolver: zodResolver(NoteValidationShema),
  });

  function onSubmit(values: z.infer<typeof NoteValidationShema>) {
    console.log(values);
    createNote.mutate(values);
    clickModalClose();
  }

  return (
    <Form {...form}>
      <h1 className="mb-4 text-center font-bold">ノートを投稿する</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="タイトル" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
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
            投稿する
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateNote;
