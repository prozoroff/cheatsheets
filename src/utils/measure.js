import { RATIO } from "../consts";

const measureLayout = async (cheatsheet, width = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      width && (cheatsheet.style.width = `${width}px`);
      resolve(cheatsheet.getBoundingClientRect());
    }, 1);
  });
};

const getRatio = ({ width, height }) => width / height;

const getThemeCss = (theme) => `/themes/${theme}.css`;

const getBox = async (cheatsheet, rotation) => {
  cheatsheet.style.width = "10000px";
  const desiredRatio = rotation === "horizontal" ? RATIO : 1 / RATIO;
  let box = await measureLayout(cheatsheet);
  let ratio = getRatio(box);
  let diff = ratio - desiredRatio;
  let sign = Math.sign(desiredRatio - ratio);
  let power = 6;
  let width = box.width;

  while (power >= 0) {
    box = await measureLayout(cheatsheet, width);
    ratio = getRatio(box);
    const currentDiff = ratio - desiredRatio;
    if (currentDiff * diff < 0) {
      sign *= -1;
      power -= 1;
    }
    diff = currentDiff;
    width += sign * Math.pow(2, power);
  }

  cheatsheet.style.width = "auto";
  return box;
};

function applySize(container, cheatsheet, box) {
  const scale = Math.min(
    container.clientWidth / box.width,
    container.clientHeight / box.height
  );
  cheatsheet.style.width = `${box.width}px`;
  cheatsheet.style.height = `${box.height}px`;
  cheatsheet.style.transform = `scale(${scale})`;
}

export { getBox, getThemeCss, applySize };
