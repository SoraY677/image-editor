type ElementType = HTMLElement | Window;

export const setMouseDownEvent = (
  element: ElementType,
  callback: (e: Event) => void
) => {
  element.addEventListener("mousedown", callback);
};

export const setMouseMoveEvent = (
  element: ElementType,
  callback: (e: MouseEvent) => void
) => {
  element.addEventListener("mousemove", (e) => {
    callback(e as MouseEvent);
  });
};

export const setMouseUpEvent = (
  element: ElementType,
  callback: (e: Event) => void
) => {
  element.addEventListener("mouseup", callback);
};

export const setDragOverEvent = (
  element: ElementType,
  callback: (e: Event) => void
) => {
  element.addEventListener("dragover", callback);
};

export const setDragLeaveEvent = (
  element: ElementType,
  callback: (e: Event) => void
) => {
  element.addEventListener("dragleave", callback);
};

export const setDropEvent = (
  element: HTMLElement,
  callback: (e: DragEvent) => void
) => {
  element.addEventListener("drop", callback);
};
