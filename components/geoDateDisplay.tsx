"use client";

import { useEffect, useState } from "react";
import DateDisplay from "./dateDisplay";
import fetchNTP from "@/lib/fetchNtp";

export default function GeoDateDisplay({ initDate }: { initDate: number }) {
  const [longitude, setLongitude] = useState(0);

  const [ntpOffset, setNtpOffset] = useState(0);

  useEffect(() => {
    fetchNTP().then((offset) => setNtpOffset(offset));

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

  return <DateDisplay initDate={initDate} offset={timeDifference} />;
}
