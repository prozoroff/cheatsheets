import React from "react";
import { useStore } from "@nanostores/react";

import Themes from "../../components/themes";
import CheatSheet from "../../components/cheatsheet";
import Download from "../../components/download";
import Rotate from "../../components/rotate";
import { themes, selectTheme } from "../../store/themes";
import { router } from "../../store/router";

import styles from "./index.module.scss";

const Topic = () => {
  const themesList = useStore(themes);
  const page = useStore(router);

  return (
    <div className={styles.root}>
      <aside>
        <a className={styles.logo} href="/">
          <img src="/logo_simple.svg" />
        </a>
        <div className={styles.selectors}>
          <Themes items={themesList} onSelect={selectTheme} />
        </div>
        <div className={styles.controls}>
          <Rotate />
          <Download />
        </div>
      </aside>
      <main>
        <CheatSheet topic={page.params.topicId} />
      </main>
    </div>
  );
};

export default Topic;
