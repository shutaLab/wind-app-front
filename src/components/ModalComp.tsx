import React from "react";
import { Modal } from "antd";

interface ModalCompProps {
  isModalOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const ModalComp: React.FC<ModalCompProps> = ({
  isModalOpen,
  onOk,
  onCancel,
}) => {
  return (
    <Modal open={isModalOpen} onOk={onOk} onCancel={onCancel}>
      <p>aaa</p>
    </Modal>
  );
};

export default ModalComp;
