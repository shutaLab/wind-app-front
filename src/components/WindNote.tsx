import {
  MoreOutlined,
  UserOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Collapse, Divider, Dropdown, Menu, Space } from "antd";
import React from "react";

const WindNote = () => {
  const text: string = "aa";

  // ドロップダウンメニューのアイテム
  const menu = (
    <Menu>
      <Menu>
        <Menu.Item
          key="favorite"
          icon={
            <Space>
              <HeartOutlined />
              お気に入り
            </Space>
          }
        ></Menu.Item>
        <Menu.Item
          key="delete"
          icon={
            <Space>
              <DeleteOutlined className="" /> 削除
            </Space>
          }
        ></Menu.Item>
        <Menu.Item
          key="edit"
          icon={
            <Space>
              <EditOutlined /> 編集
            </Space>
          }
        ></Menu.Item>
      </Menu>
    </Menu>
  );

  return (
    <div>
      <Collapse
        items={[
          {
            key: "1",
            label: (
              <div className="flex items-center ">
                <div className="w-[20%]">
                  <Avatar size={30} icon={<UserOutlined />} />
                </div>
                <div className="flex-col ">
                  <div className="text-lg  text-gray">リーパン辛すぎた</div>
                  <div className="">aa</div>
                  <div className="flex">
                    <HeartOutlined className="text-lg mr-4" />
                    <DeleteOutlined className="text-lg mr-4" />
                    <EditOutlined className="text-lg" />
                  </div>
                  <p>2いいね</p>
                </div>
              </div>
            ),
            children: <p>aaaaajjfiesjafi;ak</p>,
          },
        ]}
      />
    </div>
  );
};

export default WindNote;
