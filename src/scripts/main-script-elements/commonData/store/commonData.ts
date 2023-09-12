// количество фотографий на странице
export const numberPhotosPerPage: number = 6;
// номер первой видимой фотографии
export let firstVisiblePhotoNumber: number = 0;
// значения переменной, показывающей нужное нам действие
type OperationType = "increase" | "decrease";

export function changeFirstVisiblePhotoNumber(operation: OperationType, newPhotoNumber: number): number {
  // увеличить
  if (operation === "increase") {
    // обновляем глобальную переменную, чтобы потом использовать новое значение в коде
    firstVisiblePhotoNumber = firstVisiblePhotoNumber + newPhotoNumber;
    // возвращаем его вызвавшей переменной 
    return firstVisiblePhotoNumber;
  }
  
  // уменьшить
  if (operation === "decrease") {
    // обновляем ...
    firstVisiblePhotoNumber = firstVisiblePhotoNumber - newPhotoNumber;
    // возвращаем ...
    return firstVisiblePhotoNumber;
  }
}