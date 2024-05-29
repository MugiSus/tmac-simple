export default function DiffDisplay({ diff }: { diff: number }) {
  const date = new Date(Math.abs(diff));

  return (
    <div className="tabular-nums flex flex-col leading-none items-center">
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {["−", "±", "+"][Math.sign(diff) + 1]}
        {date.getUTCHours().toString()}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
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
