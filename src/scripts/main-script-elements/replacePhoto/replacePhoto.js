import { firstVisiblePhotoNumber, numberPhotosPerPage } from '../commonData/store/commonData';
import addImagesBackground from './addImagesBackground';
import handlersClicksByBtns from './handlersClicksByBtns';

export default function replacePhoto() {
  addImagesBackground(firstVisiblePhotoNumber);
  handlersClicksByBtns(numberPhotosPerPage, firstVisiblePhotoNumber);
}