"use client";

import { useEffect, useState } from "react";
import DiffDisplay from "./diffDisplay";
import getTimezoneOffsetWithoutDST from "@/lib/getTimezoneOffsetWithoutDST";

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
        timeout: 60000,
        enableHighAccuracy: true,
      }
    );
  }, []);

  const difference = longitude
    ? (longitude * 4 + getTimezoneOffsetWithoutDST()) * 60 * 1000
    : 0;

  return <DiffDisplay diff={difference} />;
}
