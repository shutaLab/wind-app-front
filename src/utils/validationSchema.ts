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

export const createNoteValidationShema = z.object({
  title: z.string().min(1, { message: "必須です" }),
  content: z.string().min(1, { message: "必須です" }),
  // date: z.coerce.date(),
});
