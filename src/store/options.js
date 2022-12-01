import { atom } from "nanostores";

const defaultOptons = {
  rotation: "horizontal",
};

export const options = atom(defaultOptons);

export function rotate() {
  const optionsObject = options.get();
  const rotation =
    optionsObject.rotation === "horizontal" ? "vertical" : "horizontal";
  options.set({ ...optionsObject, rotation });
}
