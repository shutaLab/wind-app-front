import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Note } from "../types/Note";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createAnswerValidationShema,
  createQuestionValidationShema,
} from "../utils/validationSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import { Button } from "../@/components/ui/button";
import { ShadTextarea } from "../@/components/ui/textarea";
import { Answer } from "../types/Question";

interface ModalProps {
  modalOpen: boolean;
  clickModalClose: () => void;
}

const AnserModal: React.FC<ModalProps> = ({ modalOpen, clickModalClose }) => {
  const form = useForm<Answer>({
    resolver: zodResolver(createAnswerValidationShema),
  });

  function onSubmit(values: z.infer<typeof createAnswerValidationShema>) {
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
            <h1 className="mb-4 text-center font-bold">質問に回答する</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField<Answer>
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
                  回答する
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AnserModal;
