"use client";

import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({
  target,
  suffix = "%",
  className = "",
}: AnimatedNumberProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger the fade-in effect
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      className={`tabular-nums ${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {target}
      {suffix}
    </span>
  );
}
