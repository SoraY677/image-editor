import { STYLE_ACTIVE_NAME } from "@scripts/config";

export const activeElement = (element: HTMLElement) => {
  element.classList.add(STYLE_ACTIVE_NAME);
};

export const deactiveElement = (element: HTMLElement) => {
  element.classList.remove(STYLE_ACTIVE_NAME);
};
