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
              <div className="flex justify-between items-center ">
                <Avatar size={30} icon={<UserOutlined />} />
                <div className="flex-col ">
                  <div className="text-xl">リーパン辛すぎた</div>
                  <div>aa</div>
                </div>
                <Dropdown overlay={menu}>
                  <button>
                    <MoreOutlined />
                  </button>
                </Dropdown>
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
