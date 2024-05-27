"use client";

import useRequestAnimationFrame from "beautiful-react-hooks/useRequestAnimationFrame";
import { useEffect, useMemo, useState } from "react";
import DateDisplay from "./dateDisplay";
import fetchNTP from "@/lib/fetchNtp";

export default function NTPDateDisplay({ initDate }: { initDate: number }) {
  const [ntpOffset, setNtpOffset] = useState(0);
  const timezoneOffset = useMemo(
    () => new Date().getTimezoneOffset() * 60 * 1000 * -1,
    []
  );

  useEffect(() => {
    fetchNTP().then((offset) => setNtpOffset(offset));
  }, []);

  return (
    <DateDisplay initDate={initDate} offset={ntpOffset + timezoneOffset} />
  );
}
