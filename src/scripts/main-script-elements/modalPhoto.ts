import { pathToPhoto } from "./commonData/commonFunctions/commonFunctions";
import { allPhoto, modalPhotoBlock, video } from "./commonData/commonElements/gettedElems";
import { firstVisiblePhotoNumber } from "./commonData/store/commonData";

export function showEnlargedPhoto() {
  Array.from(allPhoto()).forEach((image, index) => {
    image.addEventListener("click", function () {

      // При клике на фотографию устанавливаем фото в модальном окне
      let zoomPhotoCardContent: any = document.getElementsByClassName("zoom-photo-area__main-content")[0];
      zoomPhotoCardContent.style.backgroundImage = pathToPhoto(index + firstVisiblePhotoNumber + 1);

      // Затем делаем видимым модальное окно
      modalPhotoBlock().style.display = "flex";

      // Скрываем видео, чтобы при показе модального окна с фотографией оно не было видно пользователю
      video().style.display = "none";
    });
  });
}

document.getElementsByClassName("zoom-photo-area__close-icon")[0].addEventListener("click", function() {
  
  // Делаем невидимым модальное окно с фотографией и видимым видео
  modalPhotoBlock().style.display = "none";
  video().style.display = "block";
})