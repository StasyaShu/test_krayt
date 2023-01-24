import svgSprite from "gulp-svgstore";


export const sprite = () => {
  return app.gulp.src(`${app.path.src.sprite}`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
          title: "SVG-Sprite",
          message: "Error: <%= error.message %>"
      }))
  )
  .pipe(svgSprite({
    inlineSvg: true
  }))
  .pipe(app.plugins.rename('sprite.svg'))
  .pipe(app.gulp.dest(`${app.path.build.images}`));
}