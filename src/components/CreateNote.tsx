import React from "react";
import { DateSelect } from "./DateSelect";
import { CreateModalProps } from "../types/ModalProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Note } from "../types/Note";
import { createNoteValidationShema } from "../utils/validationSchema";
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
import MenuBookIcon from "@mui/icons-material/MenuBook";

const CreateNote: React.FC<CreateModalProps> = ({ clickModalClose }) => {
  const form = useForm<Note>({
    resolver: zodResolver(createNoteValidationShema),
  });

  function onSubmit(values: z.infer<typeof createNoteValidationShema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <h1 className="mb-4 text-center font-bold">ノートを投稿する</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField<Note>
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
        <FormField<Note>
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
        <FormField<Note>
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DateSelect />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end items-center">
          <a onClick={clickModalClose}>キャンセル</a>
          <Button className="ml-3 bg-custom-green" type="submit">
            質問する
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateNote;
