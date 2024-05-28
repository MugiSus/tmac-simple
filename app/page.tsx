import NTPDateDisplay from "@/components/ntpDateDisplay";
import GeoDateDisplay from "@/components/geoDateDisplay";

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center flex-wrap py-16">
      <div className="text-pink-600">
        <NTPDateDisplay initDate={Date.now()} />
      </div>
      <div className="text-cyan-600">
        <GeoDateDisplay initDate={Date.now()} />
      </div>
    </main>
  );
}
