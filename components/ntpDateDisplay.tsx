"use client";

import useRequestAnimationFrame from "beautiful-react-hooks/useRequestAnimationFrame";
import { useEffect, useMemo, useState } from "react";
import DateDisplay from "./dateDisplay";
import getNTPOffset from "@/lib/getNtpOffset";
import getTimezoneOffsetWithoutDST from "@/lib/getTimezoneOffsetWithoutDST";

export default function NTPDateDisplay({ defaultDate }: { defaultDate: Date }) {
  const [ntpOffset, setNtpOffset] = useState(0);

  useEffect(() => {
    getNTPOffset().then((offset) => setNtpOffset(offset));
  }, []);

  return (
    <DateDisplay
      defaultDate={defaultDate}
      offset={ntpOffset - getTimezoneOffsetWithoutDST() * 60 * 1000}
    />
  );
}
