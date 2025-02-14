import {
  setDragOverEvent,
  setDragLeaveEvent,
  setDropEvent,
} from "@scripts/Common/Event";
import { activeElement, deactiveElement } from "@scripts/Common/Style";
import {
  DISPATCH_DROP_IMAGE_URL_EVENT_NAME,
  DISPATCH_DROP_IMAGE_URL_TYPE,
} from "./config";
import { dispatch } from "@scripts/Common/Dispatcher";
import { getElementById } from "@scripts/Common/Element";

export const initDropArea = (dropAreaId: string) => {
  const dropAreaElement = getElementById<HTMLInputElement>(dropAreaId);
  setBodyDragOverEvent(dropAreaElement);
  setElementDragLeaveEvent(dropAreaElement);
  setElementDropEvent(dropAreaElement);
};

const dropImage = (file: File | null | undefined) => {
  if (!file) throw "file not exist";
  const blobUrl = URL.createObjectURL(file);
  dispatchDropImageUrl(blobUrl);
};

/**
 * Event
 */
const setBodyDragOverEvent = (element: HTMLInputElement) => {
  setDragOverEvent(document.body, () => {
    activeElement(element);
  });
};

const setElementDragLeaveEvent = (element: HTMLInputElement) => {
  setDragLeaveEvent(element, () => {
    deactiveElement(element);
  });
};

const setElementDropEvent = (element: HTMLInputElement) => {
  setDropEvent(element, (e) => {
    e.preventDefault();
    dropImage(e.dataTransfer?.files.item(0));
    deactiveElement(element);
  });
};

/**
 * Dispatch
 */
const dispatchDropImageUrl = (url: string) => {
  dispatch<DISPATCH_DROP_IMAGE_URL_TYPE>(DISPATCH_DROP_IMAGE_URL_EVENT_NAME, {
    url,
  });
};
