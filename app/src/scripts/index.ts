import "@styles/index.css";
import { initCanvas } from "@scripts/Canvas";
import { initDropArea } from "@scripts/DropArea";

export const init = (canvasId: string, dropAreaId: string) => {
  initCanvas(canvasId);
  initDropArea(dropAreaId);
};
