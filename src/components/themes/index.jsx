import React from "react";

import styles from "./index.module.scss";

const Themes = ({ items, onSelect }) => {
  const onChange = ({ target }) => {
    onSelect(target.options[target.selectedIndex].value);
  };

  return (
    <div>
      <select className={styles.select} onChange={onChange}>
        {items.map(({ title, id }) => (
          <option key={id}>{title}</option>
        ))}
      </select>
      <div className={styles.themes}>
        {items.map(({ title, id }) => (
          <div
            title={title}
            className={id}
            onClick={() => onSelect(id)}
            key={id}
          >
            <span>
              <i>A</i>
              <b>a</b>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
