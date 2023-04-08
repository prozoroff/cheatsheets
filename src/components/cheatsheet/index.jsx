import React, { useRef, useEffect, useState } from "react";
import { useStore } from "@nanostores/react";

import { getBox, throttle, getThemeCss, applySize } from "../../utils";
import { selectedTheme } from "../../store/themes";
import { options } from "../../store/options";
import { getById } from "../../store/topics";
import { renderLookup } from "../../utils";

import styles from "./index.module.scss";

const CheatSheet = ({ topicId }) => {
  const theme = useStore(selectedTheme).id;
  const { rotation } = useStore(options);

  const cheatsheetRef = useRef(null);
  const containerRef = useRef(null);
  const linkRef = useRef(null);

  let cheatsheet = getById(topicId)?.cheatsheet;
  if (!cheatsheet) {
    const cheatsheetStr = localStorage.getItem(topicId);
    if (cheatsheetStr) {
      cheatsheet = JSON.parse(cheatsheetStr);
    }
  }

  const [isLoading, setIsLoading] = useState(Boolean(cheatsheet));
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const measureAndApplySize = () => {
    getBox(cheatsheetRef.current, rotation).then((box) => {
      if (box.width) {
        applySize(containerRef.current, cheatsheetRef.current, box);
        setIsLoading(false);
        cheatsheetRef.current.style.visibility = "visible";
      }
    });
  };

  const handleResize = throttle(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 100);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsLoading(Boolean(cheatsheet));
  }, [topicId, theme, rotation, windowSize]);

  if (!rotation) {
    return null;
  }

  return (
    <div className={styles.container} ref={containerRef}>
      {isLoading && <img className={styles.preloader} src="/preloader.svg" />}
      {cheatsheet ? (
        <div
          key={topicId + theme + rotation + windowSize.width}
          ref={cheatsheetRef}
          className={styles.cheatsheet}
        >
          <link
            ref={linkRef}
            rel="stylesheet"
            type="text/css"
            href={getThemeCss(theme)}
            onLoad={measureAndApplySize}
          />
          {renderLookup.root(cheatsheet, { rotation })}
        </div>
      ) : (
        <div className={styles.warning}>Cheat sheet not found</div>
      )}
    </div>
  );
};

export default CheatSheet;
