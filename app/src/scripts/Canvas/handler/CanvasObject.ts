import { addCanvasObject } from "@scripts/Store/CanvasObjectStore";
import { CANVAS_OBJECT_TYPE } from "@scripts/Canvas/types/CanvasObjectType";

export const addCanvasImageObject = (
  element: HTMLCanvasElement,
  imageUrl: string
) => {
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
