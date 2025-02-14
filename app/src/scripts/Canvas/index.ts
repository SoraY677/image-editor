import { receive } from "@scripts/Common/Dispatcher";
import { getElementById } from "@scripts/Common/Element";
import {
  DISPATCH_DROP_IMAGE_URL_EVENT_NAME,
  DISPATCH_DROP_IMAGE_URL_TYPE,
} from "@scripts/DropArea/config";

export const initCanvas = (canvasId: string) => {
  const canvasElement = getElementById<HTMLCanvasElement>(canvasId);
  setImageDropedEvent(canvasElement);
};

const drawImage = (element: HTMLCanvasElement, imageUrl: string) => {
  const ctx = element.getContext("2d");

  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.onload = () => {
    ctx?.drawImage(imgElement, 0, 0, 100, 100);
  };
};

/**
 * Event
 */
const setImageDropedEvent = (element: HTMLCanvasElement) => {
  receive<DISPATCH_DROP_IMAGE_URL_TYPE>(
    DISPATCH_DROP_IMAGE_URL_EVENT_NAME,
    (e) => {
      drawImage(element, e.detail.url);
    }
  );
};
