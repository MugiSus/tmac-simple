export default function DateDisplayStatic({ date }: { date: Date }) {
  return (
    <div className="tabular-nums flex flex-col leading-none items-center">
      <div
        className={`font-light text-[9rem] md:text-[12rem] ${
          date.getUTCHours() === 0 && "opacity-40"
        }`}
        suppressHydrationWarning
      >
        {date.getUTCHours().toString().padStart(2, "0")}
      </div>
      <div
        className={`font-light text-[9rem] md:text-[12rem] ${
          date.getUTCMinutes() === 0 && "opacity-40"
        }`}
        suppressHydrationWarning
      >
        {date.getUTCMinutes().toString().padStart(2, "0")}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {date.getUTCSeconds().toString().padStart(2, "0")}
      </div>
      <div className="font-medium my-4 text-6xl" suppressHydrationWarning>
        .{date.getUTCMilliseconds().toString().padStart(3, "0")}
      </div>
    </div>
  );
}
