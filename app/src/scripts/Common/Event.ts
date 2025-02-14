type ElementType = HTMLElement | Window;

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
