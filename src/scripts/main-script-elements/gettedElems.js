export function btn_prev() {
  return document.getElementsByClassName("photo-gallery__btn-prev")[0].children[0]
}

export function btn_next() {
  return document.getElementsByClassName("photo-gallery__btn-next")[0].children[0]
}

export function allPhoto() {
  return document.getElementsByClassName("photo-gallery__card-content");
}

export function modalPhotoBlock() {
  return document.getElementsByClassName("zoom-photo-area")[0];
}

export function video() {
  return document.getElementsByTagName("video")[0];
}