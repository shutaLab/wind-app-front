import React, { useState } from "react";
import Footer from "../components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "../@/components/ui/avatar";
import NoteHeader from "../components/NoteHeader";
import { Button } from "../@/components/ui/button";
import { NavLink, Outlet } from "react-router-dom";
import { useGetUser } from "../queries/UserQuery";

export function MyPage() {
  const { data: user } = useGetUser();
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
            <p className="text-xl font-bold">{user?.user_profile?.name}</p>
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p>{user?.user_profile?.introduction}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="outline">プロフィールを編集</Button>
          <Button variant="outline">このアプリをシェア</Button>
        </div>
      </div>

      {/* タブのリンク */}
      <div className="mt-6">
        <nav className="w-full">
          <NavLink
            to="intra"
            className={({ isActive }) =>
              isActive ? "tab-active" : "tab-inactive"
            }
          >
            イントラ
          </NavLink>
          <NavLink
            to="myNote"
            className={({ isActive }) =>
              isActive ? "tab-active" : "tab-inactive"
            }
          >
            マイノート
          </NavLink>
          <NavLink
            to="departure"
            className={({ isActive }) =>
              isActive ? "tab-active" : "tab-inactive"
            }
          >
            出艇数
          </NavLink>
        </nav>

        {/* ルートに応じて表示する内容を表示 */}
        <Outlet context={{ user }} />
      </div>

      <Footer />
    </>
  );
}
