import React, { useState } from "react";

import { generate, slugify } from "../../utils";

import styles from "./index.module.scss";

const Prompt = () => {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    generate(topic).then(({ items }) => {
      const topicId = slugify(topic);
      const config = {
        kind: "root",
        title: `${topic.toUpperCase()} CHEAT SHEET`,
        items,
      };
      localStorage.setItem(topicId, JSON.stringify(config));
      window.location.replace(`/${topicId}`);
    });
  };

  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  return (
    <div className={styles.root}>
      {loading ? (
        <img className={styles.preloader} src="/preloader.svg" />
      ) : (
        <>
          <h1>Generate via ChatGPT</h1>
          <form onSubmit={handleSubmit}>
            <input
              spellCheck="false"
              type="text"
              placeholder="npm commands"
              onChange={handleChange}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Prompt;
