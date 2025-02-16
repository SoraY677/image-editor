import {
  setMouseDownEvent,
  setMouseMoveEvent,
  setMouseUpEvent,
} from "@scripts/Common/Event";
import {
  DISPATCH_DROP_IMAGE_URL_EVENT_NAME,
  DISPATCH_DROP_IMAGE_URL_TYPE,
} from "@scripts/DropArea/config";
import { receive } from "@scripts/Common/Dispatcher";
import { getCanvasElement } from "./Element";
import {
  canvasMouseDownEventHanlder,
  canvasMouseMoveEventHanlder,
  canvasMouseUpEventHanlder,
} from "./handler/MouseEventHandler";
import { canvasDropEventHanlder } from "./handler/DropEventHandler";

export const setCanvasEvents = () => {
  setImageDropedEvent();
  setCanvasMouseDownEvent();
  setCanvasMouseMoveEvent();
  setCanvasMouseUpEvent();
};

const setImageDropedEvent = () => {
  receive<DISPATCH_DROP_IMAGE_URL_TYPE>(
    DISPATCH_DROP_IMAGE_URL_EVENT_NAME,
    (e) => {
      canvasDropEventHanlder(e.detail.url);
    }
  );
};

const setCanvasMouseDownEvent = () => {
  setMouseDownEvent(getCanvasElement(), canvasMouseDownEventHanlder);
};

const setCanvasMouseMoveEvent = () => {
  setMouseMoveEvent(getCanvasElement(), canvasMouseMoveEventHanlder);
};

const setCanvasMouseUpEvent = () => {
  setMouseUpEvent(getCanvasElement(), canvasMouseUpEventHanlder);
};
