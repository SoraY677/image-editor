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
