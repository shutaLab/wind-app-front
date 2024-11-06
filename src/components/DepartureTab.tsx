import React from "react";
import { NavLink } from "react-router-dom";

const DepartureTab = () => {
  return (
    <div className="flex justify-center space-x-5 mb-3 ">
      <NavLink
        id="tab"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-custom-gray2 w-[30%] p-1 border rounded-lg text-center"
            : " w-[30%] p-1 border rounded-lg text-center"
        }
        to="/departure"
        end
      >
        出艇
      </NavLink>
      <NavLink
        id="tab"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-custom-gray2 w-[30%] p-1 border rounded-lg text-center"
            : " w-[30%] p-1 border rounded-lg text-center"
        }
        to="/departure/ranking"
        end
      >
        ランキング
      </NavLink>
    </div>
  );
};

export default DepartureTab;
