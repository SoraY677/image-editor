import {
  resetMousePos,
  setMousePos,
  setMouseStateDown,
  setMouseStateUp,
} from "../data/CanvasMouse";

export const canvasMouseDownEventHanlder = () => {
  setMouseStateDown();
};

export const canvasMouseMoveEventHanlder = (e: MouseEvent) => {
  setMousePos({ x: e.clientX, y: e.clientY });
};

export const canvasMouseUpEventHanlder = () => {
  setMouseStateUp();
  resetMousePos();
};
