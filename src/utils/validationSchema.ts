import { z } from "zod";

export const signUpValidationShema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z
    .string()
    .min(1, "emailは必須です")
    .email("正しいアドレスを使用してください"),
  grade: z.number().min(1, "学年は必須です"),
  password: z.string().min(1, "passwordは必須です"),
  sailNo: z
    .string()
    .min(1, "セールナンバーは必須です")
    .regex(/^[A-Za-z0-9]+-[A-Za-z0-9]+$/, "ハイフンは必須です"),
});

export const NoteValidationShema = z.object({
  title: z.string({ required_error: "タイトルを入力してください" }),
  content: z.string({ required_error: "内容を入力してください" }),
  // date: z.coerce.date().optional(),
});

export const createQuestionValidationShema = z.object({
  content: z.string({ required_error: "質問を入力してください" }),
});
export const createAnswerValidationShema = z.object({
  content: z.string({ required_error: "回答を入力してください" }),
});
