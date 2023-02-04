import React, { useEffect } from "react";

import { rotate, setRotation } from "../../store/options";

import styles from "./index.module.scss";

const Rotate = () => {
  const onRotateClickHander = () => {
    rotate();
  };

  useEffect(() => {
    setRotation(
      window.innerHeight > window.innerWidth ? "vertical" : "horizontal"
    );
  }, []);

  return (
    <div className={styles.rotate}>
      <button onClick={onRotateClickHander}>
        <img src="/rotate.png"></img>
      </button>
    </div>
  );
};

export default Rotate;
