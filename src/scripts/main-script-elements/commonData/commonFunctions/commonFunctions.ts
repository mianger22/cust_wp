import settings from "../../settingsProject/settings";

export function pathToPhoto(photo_number: number): string {
  return `url("${settings.pathToImage}/${photo_number}-photo.jpg")`;
}