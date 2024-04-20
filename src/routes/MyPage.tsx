import React from "react";
import Footer from "../components/Footer";
import { BellOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tabs, TabsProps } from "antd";
import Button from "../components/Button";
import WindNote from "../components/WindNote";
import Ranking from "../components/Ranking";

const MyPage = () => {
  return (
    <div className="px-3">
      <div>
        <header className="flex justify-between">
          <BellOutlined className="text-[25px] text-gray" />
          <MenuOutlined className="text-[20px] mr-3" />
        </header>
        <div className="mt-3 ">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">山田脩太</p>
            <Avatar size={64} icon={<UserOutlined />} />
          </div>
          <div className="flex-col">
            <p>SailNo. 31-50</p>
            <p>Grade 3rd </p>
            <p>東京海洋大学</p>
          </div>
        </div>
        <div className="flex justify-around mt-3">
          <Button
            className="bg-custom-gray text-black font-bold w-[45%]"
            text="プロフィールを編集"
          />
          <Button
            className="bg-custom-gray text-black font-bold w-[45%]"
            text="脩太に寄付する"
          />
        </div>
        <Tabs centered className="mt-3" size="large">
          <Tabs.TabPane tab="ノート一覧" key="1">
            <div>
              <WindNote />
              <WindNote />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="月間出艇数ランキング" key="2">
            <div>
              <Ranking />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="出艇数" key="3">
            <div>ww</div>
          </Tabs.TabPane>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
