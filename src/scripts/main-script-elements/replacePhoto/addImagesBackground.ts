import { pathToPhoto } from "../commonData/commonFunctions/commonFunctions";

export default function addImagesBackground(firstVisiblePhotoNumber: number) {
  const listPhoto = document.getElementsByClassName("photo-gallery__card-content");

  Array.from(listPhoto).forEach((photo: HTMLDivElement, index: number): void => {
    photo.style.backgroundImage = pathToPhoto(index + firstVisiblePhotoNumber + 1);
  });
}