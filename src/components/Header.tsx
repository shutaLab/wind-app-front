import { BellOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  console.log(open);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="bg-cream w-full shadow fixed top-0 left-0 right-0 z-[999]">
      <div className="flex items-center justify-between h-14 mx-5">
        <li>
          <button onClick={showDrawer}>
            <MenuOutlined className="text-gray text-2xl" />
          </button>
        </li>
        <ul className="flex">
          <li className=" mr-6">
            <Link to="">
              <BellOutlined className="text-gray text-2xl" />
            </Link>
          </li>
          <li>
            <Link to="">
              <UserOutlined className="text-gray text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
      <Drawer closable={false} onClose={onClose} open={open} placement="top">
        <Link to="/windNote">ウィンドノート</Link>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </header>
  );
};

export default Header;
