export function btn_prev(): any {
  return document.getElementsByClassName("photo-gallery__btn-prev")[0].children[0];
}

export function btn_next(): any {
  return document.getElementsByClassName("photo-gallery__btn-next")[0].children[0];
}

export function allPhoto(): HTMLCollection {
  return document.getElementsByClassName("photo-gallery__card-content");
}

export function modalPhotoBlock(): any {
  return document.getElementsByClassName("zoom-photo-area")[0];
}

export function video(): HTMLVideoElement {
  return document.getElementsByTagName("video")[0];
}