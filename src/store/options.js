import { atom } from "nanostores";

const defaultOptons = {};

export const options = atom(defaultOptons);

export function setRotation(rotation) {
  const optionsObject = options.get();
  options.set({ ...optionsObject, rotation });
}

export function rotate() {
  const optionsObject = options.get();
  const rotation =
    optionsObject.rotation === "horizontal" ? "vertical" : "horizontal";
  options.set({ ...optionsObject, rotation });
}
