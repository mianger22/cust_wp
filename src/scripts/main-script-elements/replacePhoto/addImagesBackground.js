import { pathToPhoto } from "../commonFunctions/commonFunctions";

export default function addImagesBackground(firstVisiblePhotoNumber) {
  const listPhoto = document.getElementsByClassName("photo-gallery__card-content");

  Array.from(listPhoto).forEach((photo, index) => {
    photo.style.backgroundImage = pathToPhoto(index + firstVisiblePhotoNumber + 1);
  });
}