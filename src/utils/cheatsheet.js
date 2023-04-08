import React from "react";
import hljs from "highlight.js";

import { split, permutations } from "../utils";

const itemWidth = ({ items, cheat, description }) => {
  if (items) {
    const widths = items.map(itemWidth).sort();
    return widths[Math.floor(widths.length / 2)];
  }

  const widths = [
    ...(description?.split("\n").map((line) => line.length) || []),
    ...(cheat?.split("\n").map((line) => line.length) || []),
  ];

  return Math.max(...widths);
};

const lines = ({ items, cheat, description }) => {
  if (items) {
    return items.reduce((acc, item) => acc + lines(item), 0);
  }
  return (
    (description?.split("\n").length || 0) + (cheat?.split("\n").length || 0)
  );
};

const arrange = (items, columnCount) => {
  if (items.length > 10) {
    return items;
  }
  for (const combination of permutations(items, items.length)) {
    const columns = split(combination, columnCount);
    const columnsLines = columns.map((items) => lines({ items }));
    const diff = columnsLines.reduce(
      (acc, columnLines) => acc + Math.abs(columnLines - columnsLines[0])
    );
    if (diff < 10 * columnCount) {
      return combination;
    }
  }
  return items;
};

const getColumns = ({ items }, { rotation }) => {
  const medianWidth = itemWidth({ items });
  const factor = rotation === "horizontal" ? 1 : 1.414;
  return Math.min(items.length, Math.round(180 / medianWidth / factor));
};

const getKind = (item) => {
  if (item.kind) {
    return item.kind;
  }

  if (item.cheat) {
    return "cheat";
  }

  return "article";
};

export const renderLookup = {
  root: ({ items = [], title, columns, needArrangement }, options) => {
    const columnCount = columns
      ? columns[options.rotation]
      : getColumns({ items }, options);
    const columnItems = needArrangement ? arrange(items, columnCount) : items;

    return (
      <main id="cheatsheet">
        <h1>{title}</h1>
        <div style={{ columnCount }}>
          {columnItems.map((item, i) => renderLookup[getKind(item)](item, i))}
        </div>
      </main>
    );
  },
  article: ({ items = [], title, description }, i) => {
    return (
      <article key={i}>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        {items.map((item, i) => renderLookup[getKind(item)](item, i))}
      </article>
    );
  },
  cheat: ({ cheat, description, title, language = "plaintext" }, i) => {
    const codeElement = cheat ? (
      <code className={language}>
        <div
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(cheat, { language }).value,
          }}
        ></div>
      </code>
    ) : null;
    return (
      <section key={i}>
        {title && <h4>{title}</h4>}
        {language === "plaintext" ? codeElement : <pre>{codeElement}</pre>}
        <p>{description}</p>
      </section>
    );
  },
};
