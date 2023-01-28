const copyFavicon = () => {
  return app.gulp.src(app.path.src.favicon)
  .pipe(app.gulp.dest(app.path.build.favicon))
}

const copyFonts = () => {
  return app.gulp.src(app.path.src.fonts)
    .pipe(app.gulp.dest(app.path.build.fonts))
}

export {copyFavicon, copyFonts};