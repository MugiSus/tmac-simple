import NTPDateDisplay from "@/components/ntpDateDisplay";
import GeoDateDisplay from "@/components/geoDateDisplay";

export default function Home() {
  return (
    <main className="flex h-svh w-svw items-center justify-center overflow-y-hidden">
      <div className="text-pink-600">
        <NTPDateDisplay initDate={Date.now()} />
      </div>
      <div className="text-cyan-600">
        <GeoDateDisplay initDate={Date.now()} />
      </div>
    </main>
  );
}
