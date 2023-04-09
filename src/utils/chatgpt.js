import { postData } from "./network";

const url = "https://api.alltalks.dev/chatgpt";
const getPrompt = (topic) =>
  `Write cheatsheet on ${topic} in json format. I need at least 20 items, but no more than 30 items. Every item should have the next format: {"cheat": "put here ${topic} example", "description": "put here the example description"}. The answer should look like this: {"items":[put here up to 30 items]} and be a correct json file.`;

export const generate = (topic) =>
  postData(url, {
    message: getPrompt(topic),
  }).then(({ result }) => {
    const { items } = JSON.parse(result);
    return {
      items: items.map((item) => ({
        kind: "article",
        items: [item],
      })),
    };
  });
