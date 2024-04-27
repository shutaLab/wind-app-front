import {
  MoreOutlined,
  UserOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Collapse, Divider, Dropdown, Menu, Space } from "antd";
import React from "react";
import { Note } from "../types/Note";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
interface NoteListprops {
  notes: Note[];
}
const WindNote = ({ notes }: NoteListprops) => {
  const text: string = "aa";

  return (
    <div className="mb-2">
      {notes.map((note) => (
        <Collapse
          items={[
            {
              key: note.id,
              label: (
                <div className="flex ">
                  <div className="w-[20%]">
                    <Avatar size={35} icon={<UserOutlined />} />
                  </div>
                  <div className="flex-col w-[80%]">
                    <div className="flex justify-between">
                      <p>山田脩太</p>
                      <p>{note.created_at}</p>
                    </div>
                    <div className="  text-gray">{note.title}</div>
                    <div className="flex">
                      <HeartOutlined className="text-lg mr-4" />
                      <DeleteOutlined className="text-lg mr-4" />
                      <EditOutlined className="text-lg" />
                    </div>
                    <p>2いいね</p>
                  </div>
                </div>
              ),
              children: <p>{note.content}</p>,
            },
          ]}
        />
      ))}
    </div>
  );
};

export default WindNote;
