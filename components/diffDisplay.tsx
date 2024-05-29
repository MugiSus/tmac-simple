export default function DiffDisplay({ diff }: { diff: Date }) {
  return (
    <div className="tabular-nums flex flex-col leading-none items-center">
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {["-", "±", "+"][Math.sign(diff.getTime()) + 1]}
        {diff.getUTCHours().toString()}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {diff.getUTCMinutes().toString().padStart(2, "0")}
      </div>
      <div
        className="font-light text-[9rem] md:text-[12rem]"
        suppressHydrationWarning
      >
        {diff.getUTCSeconds().toString().padStart(2, "0")}
      </div>
      <div className="font-medium my-4 text-6xl" suppressHydrationWarning>
        .{diff.getUTCMilliseconds().toString().padStart(3, "0")}
      </div>
    </div>
  );
}
