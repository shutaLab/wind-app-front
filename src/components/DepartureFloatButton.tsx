import {
  CommentOutlined,
  CustomerServiceOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";

const DepartureFloatButton = () => {
  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 30, bottom: 50 }}
        icon={<PlusOutlined className="" />}
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </>
  );
};

export default DepartureFloatButton;
