import { Drawer, DrawerProps, RadioChangeEvent, Space } from "antd";
import Button from "./Button";
import React, { useState } from "react";
interface BottomModalProps {
  open: boolean;
  onClose: () => void;
}
const BottomModal: React.FC<BottomModalProps> = ({ open, onClose }) => {
  return (
    <Drawer
      title="本日の出艇者"
      placement="bottom"
      width={500}
      height="60vh"
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button
            className="bg-custom-black text-white w-16"
            text="OK"
            onClick={onClose}
          />
        </Space>
      }
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default BottomModal;
