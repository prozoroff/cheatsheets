import { atom } from "nanostores";
import cheatsheets from "../cheatsheets/index";

const { git, linuxShell, reactHooks } = cheatsheets;

const TOPICS = [
  { id: "git", title: "git", kind: "common", cheatsheet: git },
  {
    id: "linux-shell",
    title: "linux shell",
    kind: "common",
    cheatsheet: linuxShell,
  },
  {
    id: "react-hooks",
    title: "react hooks",
    kind: "frontend",
    cheatsheet: reactHooks,
  },
];

export const topics = atom(TOPICS);

export const selectedTopic = atom(TOPICS[0]);

export function selectTopic(id) {
  selectedTopic.set(topics.get().find((topic) => topic.id === id) || { id });
}

export function getById(id) {
  return topics.get().find((topic) => topic.id === id);
}
