import { MoreOutlined, UserOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Collapse, Divider, Dropdown, Menu, Space } from "antd";
import React from "react";

const WindNote = () => {
  const text: string = "aa";

  // ドロップダウンメニューのアイテム
  const menu = (
    <Menu>
      <Menu>
        <Menu.Item
          key="delete"
          icon={
            <Space>
              <DeleteOutlined className="text-xl" /> 削除
            </Space>
          }
        ></Menu.Item>
        <Menu.Item
          key="edit"
          icon={
            <Space>
              <DeleteOutlined className="text-xl" /> 編集
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
              <div className="flex justify-between">
                <Avatar size={30} icon={<UserOutlined />} />
                <Dropdown overlay={menu}>
                  <button>
                    <MoreOutlined />
                  </button>
                </Dropdown>
              </div>
            ),
            children: <p>aaa</p>,
          },
        ]}
      />
    </div>
  );
};

export default WindNote;
