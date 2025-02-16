import {
  CANVAS_OBJECT_IMG_ITEM,
  CANVAS_OBJECT_MAP,
  CANVAS_OBJECT_TYPE,
  watchCanvasObject,
} from "@scripts/Store/CanvasStore";

export const configureRedrawContext = (
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number
) => {
  watchCanvasObject((canvasObjectMap) => {
    drawContext(ctx, canvasObjectMap, canvasWidth, canvasHeight);
  });
};

const drawContext = (
  ctx: CanvasRenderingContext2D,
  canvasObjectMap: CANVAS_OBJECT_MAP,
  canvasWidth: number,
  canvasHeight: number
) => {
  ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
  for (const key in canvasObjectMap) {
    const object = canvasObjectMap[key];
    switch (object.type) {
      case CANVAS_OBJECT_TYPE.img:
        drawImageContext(ctx, object, canvasWidth, canvasHeight);
        break;
    }
  }
};

const drawImageContext = (
  ctx: CanvasRenderingContext2D,
  object: CANVAS_OBJECT_IMG_ITEM,
  canvasWidth: number,
  canvasHeight: number
) => {
  ctx?.setTransform(
    object.scale,
    0,
    0,
    object.scale,
    (canvasWidth - object.imgElement.width * object.scale) / 2,
    (canvasHeight - object.imgElement.height * object.scale) / 2
  );
  ctx?.drawImage(
    object.imgElement,
    0,
    0,
    object.imgElement.width,
    object.imgElement.height
  );
};
