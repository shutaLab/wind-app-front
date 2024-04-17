import {
  CalendarFilled,
  FormOutlined,
  HomeFilled,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 shadow">
      <div className="flex justify-between">
        <div className=" flex-col text-center text-gray">
          <HomeFilled className="text-3xl " />
          <p>ホーム</p>
        </div>
        <div className=" flex-col text-center text-gray">
          <CalendarFilled className="text-3xl " />
          <p>カレンダー</p>
        </div>
        <div className=" flex-col text-center text-gray">
          <PlusOutlined className="text-3xl " />
          <p>出艇</p>
        </div>
        <div className=" flex-col text-center text-gray">
          <FormOutlined className="text-3xl " />
          <p>ノート</p>
        </div>
        <div className=" flex-col text-center text-gray">
          <UserOutlined className="text-3xl " />
          <p>マイページ</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
