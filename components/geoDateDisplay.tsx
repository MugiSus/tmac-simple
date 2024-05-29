"use client";

import { useEffect, useState } from "react";
import DateDisplay from "./dateDisplay";
import getNTPOffset from "@/lib/getNtpOffset";
import getTimezoneOffsetWithoutDST from "@/lib/getTimezoneOffsetWithoutDST";

export default function GeoDateDisplay({ defaultDate }: { defaultDate: Date }) {
  const [longitude, setLongitude] = useState(
    (getTimezoneOffsetWithoutDST() / 60) * -15
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
        timeout: 20000,
        enableHighAccuracy: true,
      }
    );
  }, []);

  const timeDifference = (longitude / 15) * 60 * 60 * 1000 + ntpOffset;

  console.log(timeDifference);

  return <DateDisplay defaultDate={defaultDate} offset={timeDifference} />;
}
