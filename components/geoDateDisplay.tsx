"use client";

import useGeolocationEvents from "beautiful-react-hooks/useGeolocationEvents";
import { useEffect, useState } from "react";
import DateDisplay from "./dateDisplay";
import fetchNTP from "@/lib/fetchNtp";

export default function GeoDateDisplay({ initDate }: { initDate: number }) {
  const [longitude, setLongitude] = useState(0);
  const { isSupported, onChange, onError } = useGeolocationEvents({
    enableHighAccuracy: true,
    timeout: 60000,
    maximumAge: 0,
  });

  onChange((geo) => isSupported && setLongitude(geo.coords.longitude));

  const [ntpOffset, setNtpOffset] = useState(0);

  useEffect(() => {
    fetchNTP().then((offset) => setNtpOffset(offset));
  }, []);

  const timeDifference = (longitude / 15) * 60 * 60 * 1000 + ntpOffset;

  return <DateDisplay initDate={initDate} offset={timeDifference} />;
}
