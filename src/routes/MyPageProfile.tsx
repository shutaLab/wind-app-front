import React from "react";
import { useCreateUserProfile, useGetUser } from "../queries/UserQuery";
import { Link, useNavigate } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import { useForm } from "react-hook-form";
import { Profile } from "../types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileValidationSchema } from "../utils/validationSchema";
import { z } from "zod";
import { Input } from "../@/components/ui/input";
import NoteHeader from "../components/NoteHeader";
import Footer from "../components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../@/components/ui/select";
import Button from "../components/Button";

const MyPageProfile = () => {
  const navigate = useNavigate();
  const { data: user, isLoading } = useGetUser();
  const createProfile = useCreateUserProfile(navigate);

  const profile = user?.user_profile;
  const form = useForm<Profile>({
    resolver: zodResolver(userProfileValidationSchema),
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof userProfileValidationSchema>) {
    console.log(values);
    createProfile.mutate(values);
  }

  return (
    <RequireAuth>
      <NoteHeader />
      <Form {...form}>
        <div className="p-3">
          <h1 className="mb-4 text-center font-bold">プロフィールを編集する</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              defaultValue={profile?.name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="名前" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="grade"
              defaultValue={profile?.grade}
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={profile?.grade}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="学年" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sail_no"
              defaultValue={profile?.sail_no}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="セールナンバー" />
                  </FormControl>
                  <FormMessage />
                  <p className=" text-gray-400">
                    ハイフン付きで入力してください
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="introduction"
              defaultValue={profile?.introduction ?? undefined}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="自己紹介" />
                  </FormControl>
                  <FormMessage />
                  <p className=" text-gray-400">
                    255文字以内で入力してください
                  </p>
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Link to="/myPage/intra">
                <Button text="保存せずに戻る" className="text-gray-500" />
              </Link>
              <Button
                text="保存する"
                type="submit"
                className="bg-custom-green text-white"
              />
            </div>
          </form>
        </div>
      </Form>
      <Footer />
    </RequireAuth>
  );
};

export default MyPageProfile;
