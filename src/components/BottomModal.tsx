import { Button, Drawer, DrawerProps, RadioChangeEvent, Space } from "antd";
import React, { useState } from "react";
interface BottomModalProps {
  open: boolean;
  onClose: () => void;
}
const BottomModal: React.FC<BottomModalProps> = ({ open, onClose }) => {
  return (
    <Drawer
      title="Drawer with extra actions"
      placement="bottom"
      width={500}
      height="60vh"
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
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
