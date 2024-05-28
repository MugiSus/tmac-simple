"use client";

import useRequestAnimationFrame from "beautiful-react-hooks/useRequestAnimationFrame";
import { useState } from "react";

export default function DateDisplay({
  initDate,
  offset = 0,
}: {
  initDate: number;
  offset?: number;
}) {
  const [time, setTime] = useState(initDate);

  useRequestAnimationFrame(
    (progress, next) => {
      setTime(Date.now());
      next();
    },
    { startAt: 0, finishAt: -1 }
  );

  const date = new Date(time + offset);

  return (
    <div className="tabular-nums flex flex-col leading-none items-center">
      <div className="font-light text-[8rem] sm:text-[12rem]">
        {date.getUTCHours().toString().padStart(2, "0")}
      </div>
      <div className="font-light text-[8rem] sm:text-[12rem]">
        {date.getUTCMinutes().toString().padStart(2, "0")}
      </div>
      <div className="font-light text-[8rem] sm:text-[12rem]">
        {date.getUTCSeconds().toString().padStart(2, "0")}
      </div>
      <div className="font-medium my-4 text-6xl sm:text-4xl">
        .{date.getUTCMilliseconds().toString().padStart(3, "0")}
      </div>
    </div>
  );
}
