import React, { useState } from "react";
import Footer from "../components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "../@/components/ui/avatar";
import NoteHeader from "../components/NoteHeader";
import { Button } from "../@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../@/components/ui/tabs";
import IntraList from "../components/IntraList";

export function MyPage() {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <NoteHeader />
      <div className="px-3 flex-row space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <p className=" text-xl font-bold">山田脩太</p>
            <Avatar className=" h-16 w-16 ">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p>自己紹介が入ります</p>
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="outline">プロフィールを編集</Button>
          <Button variant="outline">このアプリをシェア</Button>
        </div>
      </div>
      <Tabs defaultValue="intra" className="mt-6">
        <TabsList className="w-full">
          <TabsTrigger value="intra">イントラ</TabsTrigger>
          <TabsTrigger value="myNote">マイノート</TabsTrigger>
          <TabsTrigger value="departure">出艇数</TabsTrigger>
        </TabsList>
        <TabsContent value="intra">
          <IntraList />
        </TabsContent>
        <TabsContent value="myNote">Change your password here.</TabsContent>
        <TabsContent value="departure">出艇数</TabsContent>
      </Tabs>
      <Footer />
    </>
  );
}
