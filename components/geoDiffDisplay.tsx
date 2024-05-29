"use client";

import { useEffect, useState } from "react";
import DateDisplay from "./dateDisplay";
import getNTPOffset from "@/lib/getNtpOffset";
import DateDisplayStatic from "./dateDisplayStatic";

export default function GeoDiffDisplay() {
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
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

  const timeDifference =
    (longitude * 4 + new Date().getTimezoneOffset()) * 60 * 1000;
  return <DateDisplayStatic date={new Date(timeDifference)} />;
}
