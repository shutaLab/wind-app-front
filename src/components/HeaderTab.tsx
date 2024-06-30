import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const HeaderTab = () => {
  return (
    <div className="flex justify-center mb-3">
      <NavLink
        className="p-1 border rounded-lg w-[30%] text-center"
        to="/windNote"
      >
        ノート
      </NavLink>
      <NavLink
        className="p-1 border rounded-lg w-[30%] text-center ml-2"
        to="/question"
      >
        質問
      </NavLink>
      <NavLink
        className="p-1 border rounded-lg w-[30%] text-center ml-2"
        to="/timeline"
      >
        ランキング
      </NavLink>
    </div>
  );
};

export default HeaderTab;
