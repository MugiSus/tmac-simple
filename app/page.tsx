import NTPDateDisplay from "@/components/ntpDateDisplay";
import GeoDateDisplay from "@/components/geoDateDisplay";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col bg-slate-900">
      <div className="flex min-h-lvh items-center justify-center flex-wrap py-16 snap-center">
        <div className="text-pink-600">
          <NTPDateDisplay initDate={Date.now()} />
        </div>
        <div className="text-cyan-600">
          <GeoDateDisplay initDate={Date.now()} />
        </div>
      </div>
      <div className="flex min-h-lvh items-center justify-center snap-center flex-col gap-16 font-light text-center px-8 sm:px-16 py-16">
        <h1 className="font-semibold text-3xl">The Most Accurate Clock</h1>
        <div className="flex flex-col gap-4 items-center leading-relaxed">
          <p className="text-cyan-600 font-bold">
            The most accurate clock provides you with the most accurate time for
            your location.
          </p>
          <p>
            Since{" "}
            <span className="text-pink-600 font-bold">The left red clock</span>{" "}
            shows your timezone&apos;s NTP server time, which is, sure,
            accurate,{" "}
            <span className="text-cyan-600 font-bold">the blue one</span> is the
            most accurate, with the power of your GPS location information.
          </p>
          <p>
            This calculates an actual time difference, for example if you are at
            5° latitude, it advances{" "}
            <span className="text-cyan-600 font-bold">the blue clock</span> by
            20 minutes.
          </p>
          <p>Kyoto and Tokyo have 15 minutes of a time difference of approx.</p>
          <Link
            href="https://github.com/MugiSus/tmac-simple"
            className="underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View code on Github...
          </Link>
        </div>
        <p>Made with ❤️ by MugiSus 2024</p>
      </div>
    </main>
  );
}
