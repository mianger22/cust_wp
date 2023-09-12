import { btn_prev, btn_next, getPhotoCardsList } from '../commonData/commonElements/gettedElems';
import { changeFirstVisiblePhotoNumber } from '../commonData/store/commonData';
import addImagesBackground from './addImagesBackground';

// common functions
function disabledBtnPrev(isDisabled: boolean) {
  btn_prev().disabled = isDisabled;
}

function disabledBtnNext(isDisabled: boolean) {
  btn_next().disabled = isDisabled;
}

export default function handlersClicksByBtns(numberPhotosPerPage: number, firstVisiblePhotoNumber: number) { 
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
      if (firstVisiblePhotoNumber + numberPhotosPerPage > getPhotoCardsList().length) {
        disabledBtnNext(true);
      }
    })();
  });
}