import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 shadow">
      <div className="flex justify-between">
        <Link to="/home" className=" flex-col text-center text-gray"></Link>
        <Link to="/calendar" className=" flex-col text-center text-gray"></Link>
        <Link
          to="/departure"
          className=" flex-col text-center text-gray"
        ></Link>
        <Link to="/windNote" className=" flex-col text-center text-gray"></Link>
        <Link to="/myPage" className=" flex-col text-center text-gray"></Link>
      </div>
    </div>
  );
};

export default Footer;
