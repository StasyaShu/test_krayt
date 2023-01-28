// Основной модуль
import gulp from "gulp";
// Импорт путей
import {path} from "./gulp/config/path.js";
// Импорт общих плагинов
import {plugins} from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import {copyFavicon, copyFonts} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/delete.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
import {sprite} from "./gulp/tasks/sprite.js";
import {zip} from "./gulp/tasks/zip.js";

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.favicon, copyFonts, copyFavicon);
  gulp.watch(path.watch.html, html); //gulp.series(html, ftp) --заменить вместо html, чтобы результаты попадали сразу на сервер
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.sprite, sprite);
}

// Основные задачи
const mainTasks = gulp.series(gulp.parallel(copyFonts, copyFavicon, html, scss, js, images, sprite));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

// Экспорт сценариев
export {dev}
export {build}
export {deployZIP}

// Выполнение сценария по умолчанию
gulp.task('default', dev);
