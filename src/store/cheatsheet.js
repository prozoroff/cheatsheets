import { atom } from "nanostores";

export const html = atom("");

export function setCheasheetHtml(cheatsheetHtml) {
  html.set(cheatsheetHtml);
}
