"use client";

import { useEffect, useState } from "react";
import DateDisplay from "./dateDisplay";
import getNTPOffset from "@/lib/getNtpOffset";
import getTimezoneOffsetWithoutDST from "@/lib/getTimezoneOffsetWithoutDST";

export default function GeoDateDisplay({
  defaultDate,
}: {
  defaultDate: number;
}) {
  const [difference, setDifference] = useState(
    (new Date().getTimezoneOffset() / 60) * -15
  );

  const [ntpOffset, setNtpOffset] = useState(0);

  useEffect(() => {
    getNTPOffset().then((offset) => setNtpOffset(offset));

    const isGeolocationSupported =
      typeof window !== "undefined" && "geolocation" in window.navigator;

    if (!isGeolocationSupported) return;

    navigator.geolocation.watchPosition(
      (position) => {
        const longitude = position.coords.longitude;
        const dst =
          getTimezoneOffsetWithoutDST() - new Date().getTimezoneOffset();
        setDifference((longitude * 4 + dst) * 60 * 1000);
      },
      (error) => {
        console.error(error);
      },
      {
        maximumAge: 0,
        timeout: 60000,
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <DateDisplay defaultDate={defaultDate} offset={difference + ntpOffset} />
  );
}
