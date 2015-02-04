var path = require('path')

module.exports = (options) => {

  var gulp = options.gulp

  gulp.task('copy-assets', () => {

    gulp.src([
      './assets/**/*'
    ])
    .pipe(gulp.dest(path.join(process.cwd(), './public/')))

  })

}
