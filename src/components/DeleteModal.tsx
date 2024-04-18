import { Button, Popconfirm } from "antd";
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
      <Button danger>削除</Button>
    </Popconfirm>
  );
};

export default DeleteModal;
