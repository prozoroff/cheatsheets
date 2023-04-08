import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import html2canvas from "html2canvas";

import { PNG_SIZE } from "../../consts";
import { downloadImage } from "../../utils";
import { options } from "../../store/options";
import { selectedTopic } from "../../store/topics";
import { selectedTheme } from "../../store/themes";

import styles from "./index.module.scss";

const Download = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { rotation } = useStore(options);
  const topic = useStore(selectedTopic)?.id;
  const theme = useStore(selectedTheme).id;

  const onPngClickHandler = () => {
    if (isLoading || !topic) return;
    const container = document.getElementById("cheatsheet").parentElement;
    const box = container.getBoundingClientRect();
    const filename = `${topic}_${theme}.png`;
    const scale =
      rotation === "horizontal" ? PNG_SIZE / box.width : PNG_SIZE / box.height;

    setIsLoading(true);
    html2canvas(container, { scale }).then((canvas) => {
      downloadImage(canvas.toDataURL(), filename);
      setIsLoading(false);
    });
  };

  return (
    <div className={styles.download}>
      <button onClick={onPngClickHandler}>
        <img src={isLoading ? "/preloader.svg" : "/download.png"}></img>
      </button>
    </div>
  );
};

export default Download;
