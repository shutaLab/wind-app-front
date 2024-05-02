import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from ".././@/lib/utils";
import { Button } from ".././@/components/ui/button";
import { Calendar } from ".././@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from ".././@/components/ui/popover";

export function DateSelect() {
  const [date, setDate] = React.useState<Date>();
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(date);

  console.log(isOpen);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[100%] justify-start text-left font-normal rounded-none",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>日付</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-[9999]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate);
            setIsOpen(false); // カレンダーを閉じる
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
