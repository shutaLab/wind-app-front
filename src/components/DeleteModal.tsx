import { Popconfirm } from "antd";
import Button from "../components/Button";

import React from "react";
interface DeleteModalProps {
  confirm: () => void;
  cancel: () => void;
}
const DeleteModal: React.FC<DeleteModalProps> = ({ confirm, cancel }) => {
  return (
    <Popconfirm
      title="Delete the events"
      description="本当に削除しますか？"
      onConfirm={confirm}
      onCancel={cancel}
      okText="はい"
      cancelText="いいえ"
    >
      <Button className="bg-custom-red" text="削除" />
    </Popconfirm>
  );
};

export default DeleteModal;
