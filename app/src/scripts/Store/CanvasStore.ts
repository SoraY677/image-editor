export const CANVAS_OBJECT_TYPE = {
  img: "img",
} as const;
type CANVAS_OBJECT_TYPE =
  (typeof CANVAS_OBJECT_TYPE)[keyof typeof CANVAS_OBJECT_TYPE];

export type CANVAS_OBJECT_MAP = { [key: string]: CANVAS_OBJECT_IMG_ITEM };
export type CANVAS_OBJECT_ITEM = CANVAS_OBJECT_IMG_ITEM;
export type CANVAS_OBJECT_IMG_ITEM = {
  type: typeof CANVAS_OBJECT_TYPE.img;
  top: number;
  left: number;
  imgElement: HTMLImageElement;
  scale: number;
};
export type CHANGE_CANVAS_OBJECT_HANDLER = (
  canvasObjectMap: CANVAS_OBJECT_MAP
) => void;

const canvasObjectMap: CANVAS_OBJECT_MAP = {};
let canvasObjectMapProxy = new Proxy(canvasObjectMap, {});

export const watchCanvasObject = (callback: CHANGE_CANVAS_OBJECT_HANDLER) => {
  canvasObjectMapProxy = new Proxy(canvasObjectMap, {
    set(_, key, value) {
      canvasObjectMap[String(key)] = value;
      callback(canvasObjectMap);
      return true;
    },
    get(target, key) {
      return target[String(key)];
    },
    deleteProperty(target, key) {
      delete target[String(key)];
      callback(canvasObjectMap);
      return true;
    },
  });
};

export const getCanvasObjectMap = () => {
  return { ...canvasObjectMap };
};

export const addCanvasObject = (id: string, objectItem: CANVAS_OBJECT_ITEM) => {
  if (isObjectExist(id)) throw "canvas object already exist";
  canvasObjectMapProxy[id] = { ...objectItem };
};

export const updateCanvasObject = (
  id: string,
  objectItem: CANVAS_OBJECT_ITEM
) => {
  if (!isObjectExist(id)) throw "canvas object not exist";
  canvasObjectMapProxy[id] = { ...objectItem };
};

export const deleteCanvasObject = (id: string) => {
  if (!isObjectExist(id)) throw "canvas object not exist";
  delete canvasObjectMapProxy[id];
};

const isObjectExist = (id: string) => {
  return !!canvasObjectMapProxy[id];
};
