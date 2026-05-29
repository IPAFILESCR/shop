import { useEffect } from "react";
import type { ReactNode } from "react";
import type { ThemeId } from "../types";
import { DEFAULT_THEME, isThemeId } from "./themes";

const STORAGE_KEY = "ipa-files-scr-shop.active";

const readStored = (): ThemeId => {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isThemeId(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const theme = readStored();
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
    }
  }, []);

  return <>{children}</>;
}
