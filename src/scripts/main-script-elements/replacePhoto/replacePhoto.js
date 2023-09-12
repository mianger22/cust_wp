import { firstVisiblePhotoNumber, numberPhotosPerPage } from '../store/commonData';
import addImagesBackground from './addImagesBackground';
import handlersClicksByBtns from './handlersClicksByBtns';

export default function replacePhoto() {
  addImagesBackground(firstVisiblePhotoNumber);
  handlersClicksByBtns(numberPhotosPerPage, firstVisiblePhotoNumber);
}