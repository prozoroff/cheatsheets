import { postData } from "./network";

const url = "http://45.131.41.220:3000/message";
const getPrompt = (topic) =>
  `Write cheatsheet on ${topic} in json format. I need at least 20 items, but no more than 30 items. Every item should have the next format: {"cheat": "put here ${topic} example", "description": "put here the example description"}. The answer should look like this: {"items":[put here up to 30 items]} and be a correct json file.`;

export const generate = (topic) =>
  postData(url, {
    message: getPrompt(topic),
  }).then((result) => {
    console.log(result.message);
    const { items } = JSON.parse(result.message);
    return {
      items: items.map((item) => ({
        kind: "article",
        items: [item],
      })),
    };
  });
