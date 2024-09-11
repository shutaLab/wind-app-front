import React from "react";
import { IntraClaimType } from "../types/IntraClaim";
import dayjs from "dayjs";
import { User } from "../types/user";

const IntraClaim = ({
  intraClaim,
  user,
}: {
  intraClaim: IntraClaimType;
  user: User;
}) => {
  const start = intraClaim.departure?.start
    ? dayjs.utc(intraClaim.departure.start)
    : undefined;
  const end = intraClaim.departure?.end
    ? dayjs.utc(intraClaim.departure.end)
    : undefined;
  return (
    <div className="p-3 pr-6 rounded shadow-md bg-white hover:shadow-xl transition cursor-pointer">
      <div className="flex items-center space-x-2">
        <div>
          <p className="text-sm"> {start ? start.format("M/D") : "日付不明"}</p>
        </div>
        <div className="flex flex-col items-center text-xs">
          <p> {start ? start.format("H:mm") : "日付不明"}</p>
          <p>l</p>
          <p> {end ? end.format("H:mm") : "日付不明"}</p>
        </div>
        <button
          className="text-xs"
          onClick={() => {
            console.log("a");
          }}
        >
          {intraClaim.status === "pending" &&
            intraClaim.user.id === user.id && (
              <p className="">
                {intraClaim.intra_user.user_profile?.name}に出艇依頼中です
              </p>
            )}
          {intraClaim.status === "pending" &&
            intraClaim.user.id !== user.id && (
              <p className="">
                {intraClaim.user.user_profile?.name}
                さんから出艇依頼が届いています
              </p>
            )}
          {intraClaim.status === "approve" &&
            intraClaim.user.id === user.id && (
              <p className="">
                {intraClaim.intra_user.user_profile?.name}との出艇が確定しました
              </p>
            )}
          {intraClaim.status === "approve" &&
            intraClaim.user.id !== user.id && (
              <p className="">
                {intraClaim.user.user_profile?.name}さんとの出艇が確定しました
              </p>
            )}
        </button>
      </div>
    </div>
  );
};

export default IntraClaim;
