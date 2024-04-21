import React, { FC } from "react";
import { HOUR_LIST, TIME_LIST } from "../constant";
type TimelineProps = {
  dayList: {
    day: number;
    date: string;
  }[];
};
const TimeLine: FC<TimelineProps> = ({ dayList }) => {
  const EmptyCell = (date: { date: string }) => {
    return (
      <>
        {HOUR_LIST.map((hourList, index) => {
          return (
            <div
              key={hourList.hour}
              onClick={() => {
                console.log(date, `${hourList.hour}時`);
              }}
              className="h-60 w-full cursor-pointer hover:bg-green-50"
            />
          );
        })}
      </>
    );
  };
  return (
    <div className="h-full overflow-y-scroll flex">
      <div>
        <ul className="flex flex-col p-0 m-0 w-70 items-end">
          {TIME_LIST.map((timeItem) => {
            const splitedHour = Number(timeItem.time.split(":")[0]);
            const time = `${splitedHour}:${timeItem.time.split(":")[1]}`;
            return (
              <li key={timeItem.id} className="min-h-60">
                {time}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-256% w-full flex overflow-hidden min-w-1080">
        <div className="min-w-99.95% flex relative top-10">
          <div>
            {TIME_LIST.map((timeItem) => (
              <div key={timeItem.id}>
                <div className="h-60 after:content-[''] after:border-t after:border-gray-200 after:absolute after:w-full after:mt-1 after:z-1 after:pointer-events-none" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 w-full border border-gray-200">
            {dayList.map((dayItem, index) => {
              return (
                <div
                  key={dayItem.date}
                  style={{ gridColumn: index + 1 }}
                  className="border-r border-gray-200 w-full h-220% min-h-1440 z-1 relative"
                >
                  <div className="absolute top--16 left-37%">
                    {dayItem.date.split("-").at(1)}-
                    {dayItem.date.split("-").at(2)}
                  </div>
                  <EmptyCell date={dayItem.date} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
