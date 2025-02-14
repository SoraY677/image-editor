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

const canvasObjectMap: CANVAS_OBJECT_MAP = {};

export const getCanvasObjectMap = () => {
  return { ...canvasObjectMap };
};

export const addCanvasObject = (id: string, objectItem: CANVAS_OBJECT_ITEM) => {
  if (isObjectExist(id)) throw "canvas object already exist";
  canvasObjectMap[id] = { ...objectItem };
};

export const updateCanvasObject = (
  id: string,
  objectItem: CANVAS_OBJECT_ITEM
) => {
  if (!isObjectExist(id)) throw "canvas object not exist";
  canvasObjectMap[id] = { ...objectItem };
};

export const deleteCanvasObject = (id: string) => {
  if (!isObjectExist(id)) throw "canvas object not exist";
  delete canvasObjectMap[id];
};

const isObjectExist = (id: string) => {
  return !!canvasObjectMap[id];
};
