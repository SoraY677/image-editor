import { receive } from "@scripts/Common/Dispatcher";
import { getElementById } from "@scripts/Common/Element";
import {
  DISPATCH_DROP_IMAGE_URL_EVENT_NAME,
  DISPATCH_DROP_IMAGE_URL_TYPE,
} from "@scripts/DropArea/config";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./config";
import {
  addCanvasObject,
  CANVAS_OBJECT_TYPE,
} from "@scripts/Store/CanvasStore";

export const initCanvas = (canvasId: string) => {
  const canvasElement = getElementById<HTMLCanvasElement>(canvasId);
  canvasElement.width = CANVAS_WIDTH;
  canvasElement.height = CANVAS_HEIGHT;
  setImageDropedEvent(canvasElement);
};

const addCanvasImageObject = (element: HTMLCanvasElement, imageUrl: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.onload = () => {
    const scale =
      Math.min(
        element.width / imgElement.width,
        element.height / imgElement.height
      ) * 0.9;

    addCanvasObject(imageUrl, {
      type: CANVAS_OBJECT_TYPE.img,
      top: (element.height - imgElement.width * scale) / 2,
      left: (element.width - imgElement.width * scale) / 2,
      imgElement,
      scale,
    });
  };
};

/**
 * Event
 */
const setImageDropedEvent = (element: HTMLCanvasElement) => {
  receive<DISPATCH_DROP_IMAGE_URL_TYPE>(
    DISPATCH_DROP_IMAGE_URL_EVENT_NAME,
    (e) => {
      addCanvasImageObject(element, e.detail.url);
    }
  );
};
