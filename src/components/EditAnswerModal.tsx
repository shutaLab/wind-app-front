import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import { WindAnswer, WindIdAnswer } from "../types/Question";
import { ShadTextarea } from "../@/components/ui/textarea";
import { Button } from "../@/components/ui/button";
import { useUpdateAnswer } from "../queries/AnswerQuery";
import { useForm } from "react-hook-form";
import { createAnswerValidationShema } from "../utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent } from "../@/components/ui/dialog";
interface EditAnswewrModalProps {
  modalOpen: boolean;
  clickModalClose: () => void;
  answer: WindIdAnswer;
}
const EditAnswerModal: React.FC<EditAnswewrModalProps> = ({
  modalOpen,
  clickModalClose,
  answer,
}) => {
  const updateAnswer = useUpdateAnswer();
  const form = useForm<WindAnswer>({
    resolver: zodResolver(createAnswerValidationShema),
    defaultValues: {
      content: answer.content,
    },
  });
  function onSubmit(values: z.infer<typeof createAnswerValidationShema>) {
    console.log(values);
    updateAnswer.mutate({ id: answer.id, values: values });
    clickModalClose();
  }
  return (
    <Dialog open={modalOpen} onOpenChange={clickModalClose}>
      <DialogContent>
        <Form {...form}>
          <h1 className="mb-4 text-center font-bold">質問を編集する</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField<WindAnswer>
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ShadTextarea
                      defaultValue={answer.content}
                      {...field}
                      placeholder="質問"
                    />
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
  );
};

export default EditAnswerModal;
