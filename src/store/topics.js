import { atom } from "nanostores";

const TOPICS = [
  { id: "git", title: "git", kind: "common" },
  { id: "linux-shell", title: "linux shell", kind: "common" },
  { id: "react-hooks", title: "react hooks", kind: "frontend" },
];

export const topics = atom(TOPICS);

export const selectedTopic = atom(TOPICS[0]);

export function selectTopic(id) {
  selectedTopic.set(TOPICS.find((topic) => topic.id === id));
}
