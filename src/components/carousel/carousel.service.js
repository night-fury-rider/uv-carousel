import axios from "axios"
import API from "./carousel.api"
import { loadImages } from './carousel.action';

/**
 * @description Function to get images array from web service.
 * @param {function} setGlobalState - Method to update the global state.
 */
export const getImages = async (setGlobalState)=> {
  let response = await axios.get(API.getImages);
  if(!response || !response.data || !response.data.images) {
    console.log('Error while retriving images data.');
  }
  setGlobalState(loadImages(response.data.images));
};
