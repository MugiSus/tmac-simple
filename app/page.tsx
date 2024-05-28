import NTPDateDisplay from "@/components/ntpDateDisplay";
import GeoDateDisplay from "@/components/geoDateDisplay";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col bg-slate-950">
      <div className="flex min-h-svh items-center justify-center flex-wrap py-16 snap-center">
        <div className="text-pink-600">
          <NTPDateDisplay initDate={Date.now()} />
        </div>
        <div className="text-cyan-600">
          <GeoDateDisplay initDate={Date.now()} />
        </div>
      </div>
      <div className="flex min-h-lvh items-center justify-center snap-center flex-col gap-20 font-light text-center px-8 sm:px-16 py-16">
        <h1 className="font-semibold text-4xl">
          The Most Accurate Clock You Would Get
        </h1>
        <div className="flex flex-col gap-6 items-center leading-loose">
          <p className="font-semibold">
            The Most Accurate Clock You Would Get provides you with the most
            accurate time for your location.
          </p>
          <p>
            <span className="text-pink-600 font-semibold">The red clock</span>{" "}
            shows NTP server time, which is, sure, accurate, while{" "}
            <span className="text-cyan-600 font-semibold">the blue clock</span>{" "}
            provides the most accurate time, with the power of your GPS location
            information.
          </p>
          <p>
            This page visualizes a precise time difference based by your
            location, for example, if you are at 5° latitude, it advances{" "}
            <span className="text-cyan-600 font-semibold">the blue clock</span>{" "}
            by 20 minutes.
          </p>
          <p>
            Kyoto and Tokyo have 15 minutes of a time difference of approx.
            These clocks are completely independent of your device&apos;s clock.
          </p>
        </div>
        <div className="flex flex-col items-center leading-loose text-sm">
          <p>
            Made with ❤️ by{" "}
            <Link
              href="https://mugisus.com"
              className="underline underline-offset-2 hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MugiSus
            </Link>{" "}
            2024
          </p>
          <Link
            href="https://github.com/MugiSus/tmacywg"
            className="underline underline-offset-2 hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View code on Github...
          </Link>
        </div>
      </div>
    </main>
  );
}
