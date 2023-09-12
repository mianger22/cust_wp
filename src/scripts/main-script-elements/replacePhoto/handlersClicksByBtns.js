import { btn_prev, btn_next } from '../gettedElems';
import { changeFirstVisiblePhotoNumber } from '../store/commonData';
import addImagesBackground from './addImagesBackground';

// common functions
function disabledBtnPrev(isDisabled) {
  btn_prev().disabled = isDisabled;
}

function disabledBtnNext(isDisabled) {
  btn_next().disabled = isDisabled;
}

export default function handlersClicksByBtns(numberPhotosPerPage, firstVisiblePhotoNumber) { 
  btn_prev().addEventListener("click", () => {
    // прибавляем, чтобы менялся блок фотографий
    firstVisiblePhotoNumber = changeFirstVisiblePhotoNumber("decrease", numberPhotosPerPage);

    // обновляем блок
    addImagesBackground(firstVisiblePhotoNumber);
  
    // меняем доступность кнопок
    (function manageBtnsVisible() {
      // убираем disable у кнопки Вперёд
      disabledBtnNext(false);
  
      // если мы промотали блоки фотографий до первого, то отключаем кнопку Назад
      if (firstVisiblePhotoNumber === 0) {
        disabledBtnPrev(true);
      }
    })();
  });
  
  btn_next().addEventListener("click", () => {
    // прибавляем, чтобы менялся блок фотографий
    firstVisiblePhotoNumber = changeFirstVisiblePhotoNumber("increase", numberPhotosPerPage);

    // обновляем блок
    addImagesBackground(firstVisiblePhotoNumber);
  
    // меняем доступность кнопок
    (function manageBtnsVisible() {
      // убираем disable у кнопки Назад
      disabledBtnPrev(false);
  
      // если мы промотали блоки фотографий до последнего, то отключаем кнопку Вперёд
      if (firstVisiblePhotoNumber === 36) {
        disabledBtnNext(true);
      }
    })();
  });
}