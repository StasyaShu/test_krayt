import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения и подсказки
import browsersync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; //Проверка обновления
import ifPlugin from "gulp-if"; //Условное ветвление
import rename from "gulp-rename"; //Переименование

// Экспортируем объект с плагинами
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
    rename: rename
}