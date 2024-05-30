export default function DiffDisplay({ diff }: { diff: number }) {
  const date = new Date(Math.abs(diff));

  const hours = ["−", "±", "+"][Math.sign(diff) + 1] + date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");

  return (
    <div className="tabular-nums flex flex-col leading-none items-center">
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {hours}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {minutes}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {seconds}
      </div>
      <div className="font-medium my-4 text-6xl" suppressHydrationWarning>
        .{milliseconds}
      </div>
    </div>
  );
}
