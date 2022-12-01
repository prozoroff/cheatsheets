import React from "react";
import { useStore } from "@nanostores/react";

import { topics } from "../../store/topics";

import styles from "./index.module.scss";

const Home = () => {
  const topicsList = useStore(topics);
  const kinds = Array.from(new Set(topicsList.map(({ kind }) => kind)));
  return (
    <div className={styles.root}>
      <img src="/logo.svg" />
      <p>
        download print-ready cheat sheets on software development techniques
      </p>
      <div className={styles.topics}>
        {kinds.map((kind) => (
          <div key={kind}>
            <h2>{kind}</h2>
            <div className={styles.links}>
              {topicsList
                .filter((item) => item.kind === kind)
                .map(({ title, id }) => (
                  <a key={id} href={`/${id}`}>
                    {title}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
