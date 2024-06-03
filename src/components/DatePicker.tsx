"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { createPortal } from "react-dom";

import { cn } from "../@/lib/utils";
import { Button } from "../@/components/ui/button";
import { Calendar } from "../@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../@/components/ui/popover";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [popoverContainer, setPopoverContainer] =
    React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    // ポップオーバーコンテナ用のdivを作成してbodyに追加
    const container = document.createElement("div");
    container.style.zIndex = "9999"; // z-indexを最大に設定
    document.body.appendChild(container);
    setPopoverContainer(container);

    // クリーンアップでコンテナを削除
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  const handleSelect = (day: Date | undefined) => {
    setDate(day);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      {popoverContainer &&
        createPortal(
          <PopoverContent className="w-auto p-0 z-[9999]" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleSelect}
              initialFocus
            />
          </PopoverContent>,
          popoverContainer
        )}
    </Popover>
  );
}
