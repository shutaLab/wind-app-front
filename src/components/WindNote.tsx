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

  return (
    <div className="mb-2">
      <Collapse
        items={[
          {
            key: "1",
            label: (
              <div className="flex ">
                <div className="w-[20%]">
                  <Avatar size={35} icon={<UserOutlined />} />
                </div>
                <div className="flex-col w-[80%]">
                  <div className="flex justify-between">
                    <p>山田脩太</p>
                    <p>2024/10/08</p>
                  </div>
                  <div className="  text-gray">リーパン辛すぎた</div>
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
