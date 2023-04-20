import React from "react";
import hljs from "highlight.js";

import { getPartitions } from "../utils";
import { MAX_COLUMNS, MIN_COLUMNS } from "../consts";

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

const lines = ({ items, cheat, description, title }) => {
  if (items) {
    return (
      items.reduce((acc, item) => acc + lines(item), 0) +
      (description?.split("\n").length || 0) +
      (title?.split("\n").length || 0)
    );
  }
  return (
    (description?.split("\n").length || 0) + (cheat?.split("\n").length || 0)
  );
};

const arrange = (items, partitions, orientation) => {
  let result;
  const maxColumns = Math.min(MAX_COLUMNS[orientation], items.length);
  const minColumns = MIN_COLUMNS[orientation];
  const filteredPartitions = partitions.filter(
    (p) => p.length >= minColumns && p.length <= maxColumns
  );
  for (const partition of filteredPartitions) {
    const columns = partition.map((p) => p.map((index) => items[index]));
    const columnsLines = columns.map((items) => lines({ items }));
    const diff = Math.max(...columnsLines) / Math.min(...columnsLines);
    if (!result || result.diff > diff) {
      result = {
        items: columns.flat(),
        columnCount: columns.length,
        diff,
      };
    }
    if (diff < 1.1) {
      return result;
    }
  }
  return result;
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
    let columnCount = columns && columns[options.rotation];
    let columnItems = items;
    if (!columnCount) {
      if (needArrangement && items.length < 7) {
        const partitions = getPartitions(items.length);
        const arrangement = arrange(items, partitions, options.rotation);
        columnCount = arrangement.columnCount;
        columnItems = arrangement.items;
      } else {
        columnCount = getColumns({ items }, options);
      }
    }

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
      <>
        <article key={i}>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {items.map((item, i) => renderLookup[getKind(item)](item, i))}
        </article>
        <div></div>
      </>
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
