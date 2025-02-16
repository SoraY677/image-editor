import { POS } from "@scripts/types/CommonType";

let canvasStartPos: POS | undefined = undefined;

export const setCanvasStartPos = (element: HTMLCanvasElement) => {
  const rect = element.getBoundingClientRect();
  canvasStartPos = {
    x: rect.x,
    y: rect.y,
  };
};

export const getCanvasStartPos = () => {
  return canvasStartPos;
};
