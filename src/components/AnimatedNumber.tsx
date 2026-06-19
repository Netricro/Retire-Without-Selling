"use client";

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedNumber({
  target,
  suffix = "%",
  className = "",
}: AnimatedNumberProps) {
  return (
    <span className={`tabular-nums ${className}`}>
      {target}
      {suffix}
    </span>
  );
}
