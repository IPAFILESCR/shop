import type { ThemeId } from "../types";

export const DEFAULT_THEME: ThemeId = "executive-black";

export const isThemeId = (value: string | null): value is ThemeId =>
  value === "executive-black";
