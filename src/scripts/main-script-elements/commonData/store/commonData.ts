// количество фотографий на странице
export const numberPhotosPerPage = 6;

// номер первой видимой фотографии
export let firstVisiblePhotoNumber = 0;

export function changeFirstVisiblePhotoNumber(operation, newPhotoNumber) {
  // увеличить
  if (operation === "increase") {
    firstVisiblePhotoNumber = firstVisiblePhotoNumber + newPhotoNumber;
    return firstVisiblePhotoNumber;
  }
  
  // уменьшить
  if (operation === "decrease") {
    firstVisiblePhotoNumber = firstVisiblePhotoNumber - newPhotoNumber;
    return firstVisiblePhotoNumber;
  }
}