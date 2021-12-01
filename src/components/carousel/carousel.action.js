import { LOAD_IMAGES } from "./carousel.constants"

export const loadImages = (images)=> {
  return {
    type: LOAD_IMAGES,
    data: images
  }
};
