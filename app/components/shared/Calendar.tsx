import React from "react";
import { DayPicker } from "react-day-picker";

// components
import Icon from "~/components/shared/Icon";

// utils
import { cn } from "~/utils/cn";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export default function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-7 w-7 bg-transparent rounded-lg p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-lg w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-secondary rounded-lg focus-within:relative focus-within:z-20",
        day: cn(
          "h-9 w-9 rounded-lg p-0 font-medium aria-selected:opacity-100 transition-colors duration-150"
        ),
        day_selected: "rounded-lg !bg-primary !text-background",
        day_today: "rounded-lg bg-secondary/60 text-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <Icon icon="chevron-left" className="h-4 w-4" />
        ),
        IconRight: ({ ...props }) => (
          <Icon icon="chevron-right" className="h-4 w-4" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";
