import { watchCanvasObject } from "@scripts/Store/CanvasObjectStore";
import { getCanvasElement } from "../Element";
import { drawContext } from "./renderer";

export const configureRenderContext = (
  canvasWidth: number,
  canvasHeight: number
) => {
  const ctx = getCanvasElement().getContext("2d");
  if (!ctx) throw "Canvas context not work";
  watchCanvasObject((canvasObjectMap) => {
    drawContext(ctx, canvasObjectMap, canvasWidth, canvasHeight);
  });
};
