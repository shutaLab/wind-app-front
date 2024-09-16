import React, { useState } from "react";
import { IntraClaimType } from "../types/IntraClaim";
import dayjs from "dayjs";
import { User } from "../types/user";
import MypageIntraModal from "./MypageIntraModal";

const IntraClaim = ({
  intraClaim,
  user,
}: {
  intraClaim: IntraClaimType;
  user: User;
}) => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleClose = () => {
    setOpen(false);
  };
  const start = intraClaim.departure?.start
    ? dayjs.utc(intraClaim.departure.start)
    : undefined;
  const end = intraClaim.departure?.end
    ? dayjs.utc(intraClaim.departure.end)
    : undefined;
  return (
    <>
      <div className="w-full p-3 pr-6 rounded shadow-md bg-white hover:shadow-xl transition cursor-pointer">
        <div className="flex items-center space-x-2">
          <div>
            <p className="text-sm">
              {start ? start.format("M/D") : "日付不明"}
            </p>
          </div>
          <div className="flex flex-col items-center text-xs">
            <p>{start ? start.format("H:mm") : "日付不明"}</p>
            <p>l</p>
            <p>{end ? end.format("H:mm") : "日付不明"}</p>
          </div>
          <div className="text-xs">
            {intraClaim.status === "pending" &&
              intraClaim.user.id === user.id && (
                <p className="">
                  {intraClaim.intra_user.user_profile?.name}さんに出艇依頼中です
                </p>
              )}
            {intraClaim.status === "pending" &&
              intraClaim.user.id !== user.id && (
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  {intraClaim.user.user_profile?.name}
                  さんから出艇依頼が届いています
                </button>
              )}
            {intraClaim.status === "approve" &&
              intraClaim.user.id === user.id && (
                <p className="">
                  {intraClaim.intra_user.user_profile?.name}
                  さんとの出艇が確定しました
                </p>
              )}
            {intraClaim.status === "approve" &&
              intraClaim.user.id !== user.id && (
                <p className="">
                  {intraClaim.user.user_profile?.name}さんとの出艇が確定しました
                </p>
              )}
          </div>
        </div>
      </div>
      <MypageIntraModal
        open={open}
        handleClose={handleClose}
        intraClaim={intraClaim}
      />
    </>
  );
};

export default IntraClaim;
