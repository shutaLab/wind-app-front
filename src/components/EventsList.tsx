import React from "react";
import EventIcon from "@mui/icons-material/Event";
import { Calendar } from "../types/Calendar"; // イベント型をインポート

interface EventListProps {
  events: Calendar[];
  date: string;
}

const EventList: React.FC<EventListProps> = ({ events, date }) => {
  return (
    <div className="w-full text-left flex items-center bg-custom-white rounded-lg shadow-md mt-3">
      <div className="m-3">
        <p>{date}</p>
        {events && events.length > 0 ? (
          events.map((event) => (
            <div className="flex items-center mt-2">
              <EventIcon className="text-gray-500 mr-2" />
              <p className="text-lg">{event.title}</p>
            </div>
          ))
        ) : (
          <p className="text-lg">予定はありません</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
