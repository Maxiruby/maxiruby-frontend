import React from "react";

// components
import Icon from "~/components/shared/Icon";
import Button from "~/components/shared/Button";
import Calendar from "~/components/shared/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/shared/Popover";

// utils
import { format } from "date-fns";
import { cn } from "~/utils/cn";

interface DatePickerProps {
  date: Date;
  setDate: (date: Date) => void;
}

export default function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          title={date ? format(date, "PPP") : "Pick a date"}
          variant="border"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <Icon icon="calendar" className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
