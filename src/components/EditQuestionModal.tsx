import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Note } from "../types/Note";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createNoteValidationShema,
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
import { Question } from "../types/Question";

interface ModalProps {
  modalOpen: boolean;
  clickModalClose: () => void;
}

const EditQuestionModal: React.FC<ModalProps> = ({
  modalOpen,
  clickModalClose,
}) => {
  const form = useForm<Question>({
    resolver: zodResolver(createQuestionValidationShema),
  });

  function onSubmit(values: z.infer<typeof createQuestionValidationShema>) {
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
            <h1 className="mb-4 text-center font-bold">質問を編集する</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField<Question>
                control={form.control}
                name="question"
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
      </Dialog>
    </div>
  );
};

export default EditQuestionModal;
