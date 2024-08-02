// import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Note } from "../types/Note";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAnswerValidationShema } from "../@/components/ui/validationSchema";
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
import { WindAnswer } from "../types/Question";
import { createAnswer } from "../api/answerApi";
import { useCreateAnswer } from "../queries/AnswerQuery";

interface ModalProps {
  modalOpen: boolean;
  clickModalClose: () => void;
  question_id: number;
}

const AnserModal: React.FC<ModalProps> = ({
  modalOpen,
  clickModalClose,
  question_id,
}) => {
  const form = useForm<WindAnswer>({
    resolver: zodResolver(createAnswerValidationShema),
  });

  const createAnswer = useCreateAnswer();
  function onSubmit(values: z.infer<typeof createAnswerValidationShema>) {
    console.log(values);
    createAnswer.mutate({ question_id: question_id, values: values });
    clickModalClose();
  }

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
            <h1 className="mb-4 text-center font-bold">質問に回答する</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField<WindAnswer>
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
      </Dialog> */}
    </div>
  );
};

export default AnserModal;
