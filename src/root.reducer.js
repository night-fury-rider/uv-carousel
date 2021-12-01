import { LOAD_IMAGES } from "./components/carousel/carousel.constants";

export const initialGlobalState = {
  images: []
};

const rootReducer = (state = initialGlobalState, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      return {
        ...state,
        images: action.data
      }
    default:
      return state;
  }
};

export default rootReducer;
