import "@styles/index.css";
import { init } from "./scripts";

const CANVAS_ELEMENT_ID = "editor-canvas";
const DRAG_AREA = "drop-area";

document.addEventListener("DOMContentLoaded", () => {
  init(CANVAS_ELEMENT_ID, DRAG_AREA);
});
