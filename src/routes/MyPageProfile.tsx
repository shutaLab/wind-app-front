import React, { useState } from "react";
import { useCreateUserProfile } from "../queries/UserQuery";
import { Link, useNavigate } from "react-router-dom";
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
import { supabase } from "../utils/supabaseClient";
import { Avatar, AvatarFallback, AvatarImage } from "../@/components/ui/avatar";
import { z } from "zod";
import { useGetUser } from "../queries/AuthQuery";

const MyPageProfile = () => {
  const navigate = useNavigate();
  const { data: user } = useGetUser();
  const createProfile = useCreateUserProfile(navigate);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const profile = user?.user_profile;

  const uploadImage = async (file: File) => {
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from("windap")
      .upload(`ProfileImage/${fileName}`, file);

    if (error) {
      console.error("Image upload error:", error);
      return undefined;
    }
    return (
      supabase.storage.from("windap").getPublicUrl(`ProfileImage/${fileName}`)
        .data.publicUrl ?? undefined
    );
  };

  const form = useForm<Profile>({
    resolver: zodResolver(userProfileValidationSchema),
    mode: "onChange",
  });

  const onSubmit = async (
    values: z.infer<typeof userProfileValidationSchema>
  ) => {
    const imageUrl = selectedFile ? await uploadImage(selectedFile) : undefined;
    createProfile.mutate({ ...values, profile_image: imageUrl });
  };

  return (
    <div>
      <NoteHeader />
      <Form {...form}>
        <div className="p-3">
          <h1 className="mb-4 text-center font-bold">プロフィールを編集する</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex justify-center">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={previewUrl || profile?.profile_image}
                  alt={profile?.name || "Profile Image"}
                />
                <AvatarFallback>
                  {profile?.name?.charAt(0) || "P"}
                </AvatarFallback>
              </Avatar>
            </div>
            <FormField
              control={form.control}
              name="profile_image"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setSelectedFile(file);
                          setPreviewUrl(URL.createObjectURL(file));
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      {[1, 2, 3, 4].map((grade) => (
                        <SelectItem key={grade} value={`${grade}`}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
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
                    <Input
                      {...field}
                      placeholder="セールナンバー (ハイフン付きで入力してください)"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="introduction"
              defaultValue={profile?.introduction}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="自己紹介 (255文字以内)" />
                  </FormControl>
                  <FormMessage />
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
    </div>
  );
};

export default MyPageProfile;
