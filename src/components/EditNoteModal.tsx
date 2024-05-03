import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Note } from "../types/Note";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNoteValidationShema } from "../utils/validationSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import { Input } from "../@/components/ui/input";
import { DatePickerForm } from "./DateSelect";
import { Button } from "../@/components/ui/button";
import { ShadTextarea } from "../@/components/ui/textarea";

interface ModalProps {
  modalOpen: boolean;
  clickModalClose: () => void;
}

const EditNoteModal: React.FC<ModalProps> = ({
  modalOpen,
  clickModalClose,
}) => {
  const form = useForm<Note>({
    resolver: zodResolver(createNoteValidationShema),
  });

  function onSubmit(values: z.infer<typeof createNoteValidationShema>) {
    console.log(values);
  }

  return (
    <div>
      <Dialog
        open={modalOpen}
        onClose={clickModalClose}
        maxWidth="xl"
        fullWidth
      >
        <DialogContent>
          <Form {...form}>
            <h1 className="mb-4 text-center font-bold">ノートを編集する</h1>
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
              <DatePickerForm form={form} />

              <div className="flex justify-end items-center">
                <a onClick={clickModalClose}>キャンセル</a>
                <Button className="ml-3 bg-custom-green" type="submit">
                  編集する
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditNoteModal;
