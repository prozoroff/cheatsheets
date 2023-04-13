import { postData } from "./network";

const url = "https://api.alltalks.dev/chatgpt";
const getPrompt = (topic) =>
  //`Write cheatsheet on ${topic} in json format. I need at least 20 items, but no more than 30 items. Every item should have the next format: {"cheat": "put here ${topic} example", "description": "put here the example description"}. The answer should look like this: {"items":[put here up to 30 items]} and be a correct json file.`;
  `Write a big cheatsheet on ${topic} in json format. Every cheat should have the next format: {"cheat": "put here one of ${topic} example of usage", "description": "put here the example description"}. Divide all cheats into several groups by type. Every group should have the next syntax: {"title": "put here the group title", "items": [put here the cheats included in this group]}. I need at as many as possible cheats, but no more than 40. The answer should look like this: {"groups":[put here all groups]} and be a stringified json file.`;
export const generate = (topic) =>
  postData(url, {
    message: getPrompt(topic),
  }).then(({ result }) => {
    const { groups } = JSON.parse(result);
    return {
      needArrangement: true,
      items: groups.map(({ title, items }) => ({
        kind: "article",
        title,
        items,
      })),
    };
  });
