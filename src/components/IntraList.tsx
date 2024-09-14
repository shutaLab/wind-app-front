import React from "react";
import { useGetIntraClaims } from "../queries/IntraClaimQuery";
import IntraClaim from "./IntraClaim";
import { User } from "../types/user";
import { useOutletContext } from "react-router-dom";

type IntraListContextType = { user: User };

const IntraList = () => {
  const { data: intraClaims, error, isLoading } = useGetIntraClaims(); // エラーハンドリングを追加
  const { user } = useOutletContext<IntraListContextType>();

  if (isLoading) {
    return <div>Loading...</div>; // ローディング中の表示
  }

  if (error) {
    return <div>Error loading intra claims</div>; // エラー時の表示
  }

  if (!intraClaims || intraClaims.length === 0) {
    return <div>No intra claims available</div>; // データがない場合の表示
  }

  return (
    <div className="px-4">
      <p className="text-gray-400 mb-2">出艇前のイントラが表示されます</p>
      <div className="space-y-2">
        {intraClaims.map((intraClaim) =>
          intraClaim && intraClaim.id ? ( // intraClaimとidの存在確認
            <IntraClaim
              key={intraClaim.id}
              intraClaim={intraClaim}
              user={user}
            />
          ) : (
            <div key={Math.random()}>Invalid claim data</div> // 無効なデータがあった場合の処理
          )
        )}
      </div>
    </div>
  );
};

export default IntraList;
