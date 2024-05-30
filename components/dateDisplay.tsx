"use client";

import useRequestAnimationFrame from "beautiful-react-hooks/useRequestAnimationFrame";
import { useState } from "react";

export default function DateDisplay({
  defaultDate,
  offset,
}: {
  defaultDate: Date;
  offset?: number;
}) {
  const [currentDate, setCurrentDate] = useState(defaultDate);

  useRequestAnimationFrame(
    (progress, next) => {
      setCurrentDate(new Date());
      next();
    },
    { startAt: 0, finishAt: -1 }
  );

  const date = new Date(currentDate.getTime() + (offset ?? 0));

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const milliseconds = date.getMilliseconds().toString().padStart(3, "0");

  return (
    <div className="tabular-nums flex flex-col leading-none items-center">
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {hours}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {minutes}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {seconds}
      </div>
      <div className="font-medium my-4 text-6xl" suppressHydrationWarning>
        .{milliseconds}
      </div>
    </div>
  );
}
