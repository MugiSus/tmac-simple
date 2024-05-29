"use client";

import useRequestAnimationFrame from "beautiful-react-hooks/useRequestAnimationFrame";
import { useEffect, useMemo, useState } from "react";
import DateDisplay from "./dateDisplay";
import getNTPOffset from "@/lib/getNtpOffset";

export default function NTPDateDisplay({ defaultDate }: { defaultDate: Date }) {
  const [ntpOffset, setNtpOffset] = useState(0);
  const timezoneOffset = useMemo(
    () => new Date().getTimezoneOffset() * 60 * 1000 * -1,
    []
  );

  useEffect(() => {
    getNTPOffset().then((offset) => setNtpOffset(offset));
  }, []);

  return (
    <DateDisplay
      defaultDate={defaultDate}
      offset={ntpOffset + timezoneOffset}
    />
  );
}
