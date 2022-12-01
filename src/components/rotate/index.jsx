import React from "react";

import { rotate } from "../../store/options";

import styles from "./index.module.scss";

const Rotate = () => {
  const onRotateClickHander = () => {
    rotate();
  };

  return (
    <div className={styles.rotate}>
      <button onClick={onRotateClickHander}>
        <img src="/rotate.png"></img>
      </button>
    </div>
  );
};

export default Rotate;
