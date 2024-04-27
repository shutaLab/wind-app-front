import { CommentOutlined, HolderOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";

const DepartureFloatButton = () => {
  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="default"
        style={{ right: 30, bottom: 60 }}
        icon={<HolderOutlined />}
      >
        <FloatButton style={{ width: 60, height: 60 }} />
        <FloatButton
          style={{ width: 60, height: 60 }}
          icon={<CommentOutlined />}
        />
      </FloatButton.Group>
    </>
  );
};

export default DepartureFloatButton;
