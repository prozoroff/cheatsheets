import React, { useRef, useEffect, useState } from "react";
import { useStore } from "@nanostores/react";

import { getBox, throttle, getThemeCss, applySize } from "../../utils";
import cheatsheets from "../../cheatsheets/index";
import { selectedTheme } from "../../store/themes";
import { options } from "../../store/options";
import { renderLookup } from "../../utils";

import styles from "./index.module.scss";

const CheatSheet = ({ topic }) => {
  const theme = useStore(selectedTheme).id;
  const { rotation } = useStore(options);

  const cheatsheetRef = useRef(null);
  const containerRef = useRef(null);
  const linkRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const measureAndApplySize = () => {
    getBox(cheatsheetRef.current, rotation).then((box) => {
      if (box.width) {
        applySize(containerRef.current, cheatsheetRef.current, box, rotation);
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
    setIsLoading(true);
  }, [topic, theme, rotation, windowSize]);

  return (
    <div className={styles.container} ref={containerRef}>
      {isLoading && <img className={styles.preloader} src="/preloader.svg" />}

      <div
        key={topic + theme + rotation + windowSize.width}
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
        {renderLookup.root(cheatsheets[topic], { rotation })}
      </div>
    </div>
  );
};

export default CheatSheet;
