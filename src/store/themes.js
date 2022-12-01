import { atom } from "nanostores";

const THEMES = ["default", "darkly", "journal", "sketchy", "morph"].map(
  (theme) => ({
    id: theme,
    title: theme,
  })
);

export const themes = atom(THEMES);

export const selectedTheme = atom(THEMES[0]);

export function selectTheme(id) {
  selectedTheme.set(THEMES.find((theme) => theme.id === id));
}
