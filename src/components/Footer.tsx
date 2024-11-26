import { NavLink } from "react-router-dom";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

const Footer = () => {
  return (
    <div className=" w-full max-w-md bg-white border-t sticky bottom-0">
      <div className="flex justify-between">
        <NavLink
          id="footer"
          className={({ isActive }) =>
            isActive
              ? "text-custom-pink text-center p-1 flex-1"
              : "text-gray-600 text-center p-1 flex-1"
          }
          to="/calendar"
        >
          <div className="flex flex-col items-center text-sm">
            <CalendarMonthOutlinedIcon />
            <p className="text-xs mt-1">カレンダー</p>
          </div>
        </NavLink>
        <NavLink
          id="footer"
          className={({ isActive }) =>
            isActive
              ? "text-custom-pink text-center p-1 flex-1"
              : "text-gray-600 text-center p-1 flex-1"
          }
          to="/departure"
        >
          <div className="flex flex-col items-center text-sm">
            <TripOriginIcon />
            <p className="text-xs mt-1">出艇</p>
          </div>
        </NavLink>
        <NavLink
          id="footer1"
          className={({ isActive }) =>
            isActive
              ? "text-custom-pink text-center p-1 flex-1"
              : "text-gray-600 text-center p-1 flex-1"
          }
          to="/windNote"
        >
          <div className="flex flex-col items-center text-sm">
            <EditNoteOutlinedIcon />
            <p className="text-xs mt-1">ノート</p>
          </div>
        </NavLink>
        <NavLink
          id="footer"
          className={({ isActive }) =>
            isActive
              ? "text-custom-pink text-center p-1 flex-1"
              : "text-gray-600 text-center p-1 flex-1"
          }
          to="/myPage/intra"
        >
          <div className="flex flex-col items-center text-sm">
            <PermIdentityOutlinedIcon />
            <p className="text-xs mt-1">マイページ</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
