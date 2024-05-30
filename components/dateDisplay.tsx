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
  const [now, setNow] = useState(0);

  useRequestAnimationFrame(
    (progress, next) => {
      setNow(performance.now());
      next();
    },
    { startAt: 0, finishAt: -1 }
  );

  const date = new Date(defaultDate.getTime() + now + (offset ?? 0));

  return (
    <div className="tabular-nums flex flex-col leading-none items-center">
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {date.getHours().toString().padStart(2, "0")}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {date.getMinutes().toString().padStart(2, "0")}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {date.getSeconds().toString().padStart(2, "0")}
      </div>
      <div className="font-medium my-4 text-6xl" suppressHydrationWarning>
        .{date.getMilliseconds().toString().padStart(3, "0")}
      </div>
    </div>
  );
}
