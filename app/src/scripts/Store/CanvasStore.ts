import { createProxy } from "@scripts/Common/Proxy";
import {
  CANVAS_OBJECT_ITEM,
  CANVAS_OBJECT_MAP,
} from "@scripts/types/CanvasObject";

const canvasObjectMap: CANVAS_OBJECT_MAP = {};
let canvasObjectMapProxy: CANVAS_OBJECT_MAP | undefined = undefined;

export const watchCanvasObject = (
  callback: (canvasObjectMap: CANVAS_OBJECT_MAP) => void
) => {
  canvasObjectMapProxy = createProxy<CANVAS_OBJECT_ITEM, CANVAS_OBJECT_MAP>(
    canvasObjectMap,
    (key, item) => {
      canvasObjectMap[String(key)] = item;
    },
    (canvasObjectMap) => {
      callback(canvasObjectMap);
    }
  );
};

export const getCanvasObjectMap = () => {
  return { ...canvasObjectMap };
};

export const addCanvasObject = (id: string, objectItem: CANVAS_OBJECT_ITEM) => {
  if (!canvasObjectMapProxy || isObjectExist(id))
    throw "canvas object already exist";
  canvasObjectMapProxy[id] = { ...objectItem };
};

export const updateCanvasObject = (
  id: string,
  objectItem: CANVAS_OBJECT_ITEM
) => {
  if (!canvasObjectMapProxy || !isObjectExist(id))
    throw "canvas object not exist";
  canvasObjectMapProxy[id] = { ...objectItem };
};

export const deleteCanvasObject = (id: string) => {
  if (!canvasObjectMapProxy || !isObjectExist(id))
    throw "canvas object not exist";
  delete canvasObjectMapProxy[id];
};

const isObjectExist = (id: string) => {
  return !!canvasObjectMapProxy?.[id];
};
