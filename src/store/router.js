import { createRouter } from "@nanostores/router";

export const router = createRouter({
  home: "/",
  topic: "/:topicId",
});
