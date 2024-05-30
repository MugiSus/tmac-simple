"use client";

import useRequestAnimationFrame from "beautiful-react-hooks/useRequestAnimationFrame";
import { useState } from "react";

export default function DateDisplay({
  defaultDate,
  offset,
}: {
  defaultDate: number;
  offset?: number;
}) {
  const [currentTime, setCurrentTime] = useState(defaultDate);

  useRequestAnimationFrame(
    (progress, next) => {
      setCurrentTime(Date.now());
      next();
    },
    { startAt: 0, finishAt: -1 }
  );

  const date = new Date(currentTime + (offset ?? 0));

  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");

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
