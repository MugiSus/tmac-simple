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
  const [longitude, setLongitude] = useState(
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
        setLongitude(position.coords.longitude);
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

  const difference = longitude
    ? (longitude * 4 +
        (getTimezoneOffsetWithoutDST() - new Date().getTimezoneOffset())) *
      60 *
      1000
    : 0;

  console.log(defaultDate, difference);

  return <DateDisplay defaultDate={defaultDate} offset={difference} />;
}
