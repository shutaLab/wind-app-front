import React from "react";
import { DepartureType } from "../types/Departure";
import dayjs from "dayjs";
import { TableCell, TableRow } from "../@/components/ui/table";

const Departure = ({ departure }: { departure: DepartureType }) => {
  const start = departure?.start ? dayjs.utc(departure.start) : undefined;
  const end = departure?.end ? dayjs.utc(departure.end) : undefined;
  return (
    <TableRow>
      <TableCell className="font-medium">
        {start ? start.format("M/D") : "日付不明"}
      </TableCell>
      <TableCell>{start ? start.format("H:mm") : "日付不明"}</TableCell>
      <TableCell>{end ? end.format("H:mm") : "日付不明"}</TableCell>
    </TableRow>
  );
};

export default Departure;
