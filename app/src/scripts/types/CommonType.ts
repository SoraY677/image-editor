export type POS = {
  x: number;
  y: number;
};

export const MOUSE_STATE = {
  down: "down",
  up: "up",
} as const;
export type MOUSE_STATE = (typeof MOUSE_STATE)[keyof typeof MOUSE_STATE];
