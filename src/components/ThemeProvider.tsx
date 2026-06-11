"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode, useMemo } from "react";

export type Theme = "dark" | "light" | "midnight";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  cycle: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  setTheme: () => {},
  cycle: () => {},
  mounted: false,
});

export function useTheme() {
  return useContext(ThemeContext);
}

const THEME_ORDER: Theme[] = ["dark", "light", "midnight"];

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem("rws-theme") as Theme | null;
    if (saved && THEME_ORDER.includes(saved)) return saved;
  } catch {
    // localStorage not available
  }
  return "dark";
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setThemeState(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("rws-theme", theme);
    } catch {
      // localStorage not available
    }
  }, [theme, mounted]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);

  const cycle = useCallback(() => {
    setThemeState((prev) => {
      const idx = THEME_ORDER.indexOf(prev);
      return THEME_ORDER[(idx + 1) % THEME_ORDER.length];
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, cycle, mounted }),
    [theme, setTheme, cycle, mounted]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
