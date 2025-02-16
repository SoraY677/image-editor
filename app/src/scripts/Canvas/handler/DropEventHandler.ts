import { addCanvasImageObject } from "./CanvasObject";
import { getCanvasElement } from "../Element";

export const canvasDropEventHanlder = (url: string) => {
  addCanvasImageObject(getCanvasElement(), url);
};
