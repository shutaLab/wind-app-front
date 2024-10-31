import React, { useState } from "react";
import Footer from "../components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "../@/components/ui/avatar";
import NoteHeader from "../components/NoteHeader";
import { Button } from "../@/components/ui/button";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useGetUser } from "../queries/UserQuery";
import RequireAuth from "../components/RequireAuth";

export function MyPage() {
  const { data: user } = useGetUser();
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return (
    <RequireAuth>
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
          <Button className="w-[45%]" variant="outline">
            <Link to="/myPage/profile">プロフィールを編集</Link>
          </Button>
          <Button className="w-[45%]" variant="outline">
            このアプリをシェア
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <nav className="flex  w-full border-b justify-center">
          <NavLink
            id="MyPageTab"
            className={({ isActive }) =>
              isActive
                ? "text-black w-[30%] text-center border-b-2 pb-2 border-black"
                : "text-gray-400 w-[30%] text-center"
            }
            to="intra"
          >
            イントラ
          </NavLink>
          <NavLink
            id="MyPageTab"
            className={({ isActive }) =>
              isActive
                ? "text-black w-[30%] text-center border-b-2 pb-2 border-black"
                : "text-gray-400 w-[30%] text-center"
            }
            to="note"
          >
            ノート
          </NavLink>
          <NavLink
            id="MyPageTab"
            className={({ isActive }) =>
              isActive
                ? "text-black w-[30%] text-center border-b-2 pb-2 border-black"
                : "text-gray-400 w-[30%] text-center"
            }
            to="question"
          >
            質問
          </NavLink>
          <NavLink
            id="MyPageTab"
            className={({ isActive }) =>
              isActive
                ? "text-black w-[30%] text-center border-b-2 pb-2 border-black"
                : "text-gray-400 w-[30%] text-center"
            }
            to="answer"
          >
            回答
          </NavLink>
          <NavLink
            id="MyPageTab"
            className={({ isActive }) =>
              isActive
                ? "text-black w-[30%] text-center border-b-2 pb-2 border-black"
                : "text-gray-400 w-[30%] text-center"
            }
            to="departure"
          >
            出艇数
          </NavLink>
        </nav>
        <Outlet context={{ user }} />
      </div>
      <Footer />
    </RequireAuth>
  );
}
