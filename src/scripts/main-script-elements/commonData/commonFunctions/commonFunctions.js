import settings from "../../settingsProject/settings";

export function pathToPhoto(photo_number) {
  return `url("${settings.pathToImage}/${photo_number}-photo.jpg")`;
}