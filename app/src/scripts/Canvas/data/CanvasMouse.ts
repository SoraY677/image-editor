import { MOUSE_STATE, POS } from "@scripts/types/CommonType";

let mouseState: MOUSE_STATE = MOUSE_STATE.up;
let mousePos: POS | undefined = undefined;

export const setMouseStateDown = () => {
  mouseState = MOUSE_STATE.down;
};

export const setMouseStateUp = () => {
  mouseState = MOUSE_STATE.up;
};

export const setMousePos = (pos: POS) => {
  mousePos = { ...pos };
};

export const resetMousePos = () => {
  mousePos = undefined;
};
