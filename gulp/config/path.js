// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./build`;
const srcFolder = `./source`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
        favicon: `${buildFolder}/favicon/`
    },
    src: {
        js: `${srcFolder}/js/main.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/sass/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        favicon: `${srcFolder}/favicon/**/*.*`,
        sprite: `${srcFolder}/img/svg/*.svg`,
        fonts: `${srcFolder}/fonts/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/sass/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,webp,svg,ico}`,
        sprite: `${srcFolder}/sprite/*.svg`,
        files: `${srcFolder}/files/**/*.*`,
        favicon: `${srcFolder}/favicon/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}
