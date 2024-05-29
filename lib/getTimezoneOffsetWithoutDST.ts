"use client";

// Get timezone offset without daylight saving time

export default function getTimezoneOffsetWithoutDST() {
  const date = new Date();
  const jan = new Date(date.getFullYear(), 0, 1);
  const jul = new Date(date.getFullYear(), 6, 1);
  // return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  return date.getTimezoneOffset();
}
