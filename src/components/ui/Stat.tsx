export interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
        {value}
      </span>
      <span className="text-xs text-white/35 md:text-sm">{label}</span>
    </div>
  );
}
