import React, { useEffect, useState } from "react";
import { useCreateUserProfile } from "../queries/UserQuery";
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
import { supabase } from "../utils/supabaseClient";
import { Avatar, AvatarFallback, AvatarImage } from "../@/components/ui/avatar";
import { z } from "zod";
import { useGetUser } from "../queries/AuthQuery";
import { toast } from "react-toastify";
import Button from "../components/Button";

const sanitizeFileName = (originalName: string): string => {
  const timestamp = Date.now();
  const extension = originalName.split(".").pop()?.toLowerCase() || "webp";

  const baseName = originalName
    .split(".")[0]
    .replace(/[^a-zA-Z0-9]/g, "") // 英数字以外を除去
    .substring(0, 30)
    .toLowerCase();

  return `${timestamp}${baseName}.${extension}`;
};

const MyPageProfile = () => {
  const navigate = useNavigate();
  const { data: user } = useGetUser();
  const createProfile = useCreateUserProfile(navigate);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const profile = user?.user_profile;

  const validateFile = (file: File): boolean => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      toast.error("JPG, PNG, WEBPファイルのみアップロード可能です");
      return false;
    }

    if (file.size > maxSize) {
      toast.error("ファイルサイズは5MB以下にしてください");
      return false;
    }

    return true;
  };

  const uploadImage = async (file: File) => {
    try {
      const fileName = sanitizeFileName(file.name);
      console.log("Uploading file:", fileName);

      const { data, error } = await supabase.storage
        .from("windap")
        .upload(`ProfileImage/${fileName}`, file, {
          cacheControl: "3600",
          upsert: true,
          contentType: file.type,
        });

      if (error) {
        console.error("Upload error:", error);
        toast.error("画像のアップロードに失敗しました");
        return undefined;
      }

      const { data: urlData } = supabase.storage
        .from("windap")
        .getPublicUrl(`ProfileImage/${fileName}`);

      return urlData.publicUrl;
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("画像のアップロードに失敗しました");
      return undefined;
    }
  };

  const form = useForm<Profile>({
    resolver: zodResolver(userProfileValidationSchema),
    mode: "onChange",
    defaultValues: {
      name: profile?.name || "",
      grade: profile?.grade || "",
      sail_no: profile?.sail_no || "",
      introduction: profile?.introduction || "",
    },
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!validateFile(file)) {
      e.target.value = "";
      return;
    }

    setSelectedFile(file);

    // 古いプレビューURLを解放してから新しいURLを設定
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    const newPreviewUrl = URL.createObjectURL(file);
    setPreviewUrl(newPreviewUrl);
  };

  const onSubmit = async (
    values: z.infer<typeof userProfileValidationSchema>
  ) => {
    try {
      const imageUrl = selectedFile
        ? await uploadImage(selectedFile)
        : profile?.profile_image;

      createProfile.mutate({
        ...values,
        profile_image: imageUrl,
      });
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("プロフィールの更新に失敗しました");
    }
  };

  // コンポーネントのアンマウント時にプレビューURLを解放
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <RequireAuth>
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
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleFileSelect}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
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
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value}>
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
    </RequireAuth>
  );
};

export default MyPageProfile;
