import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./config";
import { configureRenderContext } from "./context";

import { setCanvasEvents } from "./Event";
import { setCanvasElement } from "./Element";

export const initCanvas = (canvasId: string) => {
  setCanvasElement(canvasId);
  setCanvasEvents();
  configureRenderContext(CANVAS_WIDTH, CANVAS_HEIGHT);
};
