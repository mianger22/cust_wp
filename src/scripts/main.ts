// подключаем стили, чтобы сформировать отдельный css всего проекта
import "../styles/index.scss";

// подключаем главные блоки проекта
import replacePhoto from './main-script-elements/replacePhoto/replacePhoto';
import { showEnlargedPhoto } from "./main-script-elements/modalPhoto";

replacePhoto();
showEnlargedPhoto();