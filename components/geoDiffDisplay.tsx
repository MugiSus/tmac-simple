"use client";

import { useEffect, useState } from "react";
import DateDisplay from "./dateDisplay";
import getNTPOffset from "@/lib/getNtpOffset";
import DiffDisplay from "./diffDisplay";

export default function GeoDiffDisplay() {
  const [longitude, setLongitude] = useState<number | false>(false);

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

  const difference = longitude
    ? (longitude * 4 + new Date().getTimezoneOffset()) * 60 * 1000
    : 0;
  return <DiffDisplay diff={new Date(difference)} />;
}
