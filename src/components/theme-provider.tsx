import { useEffect } from "react";

// Light-only theme. The dark mode toggle has been removed.
// This file is kept as a thin pass-through so existing imports keep working.

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("dark");
    root.classList.add("light");
    root.style.colorScheme = "light";
    try {
      localStorage.removeItem("wepix-theme");
    } catch {}
  }, []);

  return <>{children}</>;
}

export function useTheme() {
  return {
    theme: "light" as const,
    toggle: () => {},
    setTheme: (_t: "light") => {},
  };
}
