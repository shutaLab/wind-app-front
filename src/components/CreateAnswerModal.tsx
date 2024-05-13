import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import { ShadTextarea } from "../@/components/ui/textarea";
import { createQuestionValidationShema } from "../utils/validationSchema";
import { CreateModalProps } from "../types/ModalProps";
import { WindQuestion } from "../types/Question";
import { useCreateQuestion } from "../queries/QuestionQuery";
const CreateAnswer: React.FC<CreateModalProps> = ({ clickModalClose }) => {
  const createQuestion = useCreateQuestion();
  const form = useForm<WindQuestion>({
    resolver: zodResolver(createQuestionValidationShema),
  });
  function onSubmit(values: z.infer<typeof createQuestionValidationShema>) {
    console.log(values);
    createQuestion.mutate(values);
    clickModalClose();
  }
  return (
    <Form {...form}>
      <h1 className="mb-4 text-center font-bold">質問を投稿する</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField<WindQuestion>
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ShadTextarea {...field} placeholder="質問" />
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
export default CreateAnswer;
