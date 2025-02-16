import { getElementById } from "@scripts/Common/Element";

let canvasElement: HTMLCanvasElement | undefined = undefined;

export const setCanvasElement = (id: string) => {
  canvasElement = getElementById<HTMLCanvasElement>(id);
};

export const getCanvasElement = (): HTMLCanvasElement => {
  if (!canvasElement) throw "Canvas element is undefined";
  return canvasElement;
};
