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
import { Question } from "../types/Question";
import { CreateModalProps } from "../types/ModalProps";
const CreateQuestion: React.FC<CreateModalProps> = ({ clickModalClose }) => {
  const form = useForm<Question>({
    resolver: zodResolver(createQuestionValidationShema),
  });
  function onSubmit(values: z.infer<typeof createQuestionValidationShema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <h1 className="mb-4 text-center font-bold">質問を投稿する</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField<Question>
          control={form.control}
          name="question"
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
export default CreateQuestion;
