var path = require('path')

module.exports = function(options) {

  var gulp = options.gulp

  gulp.task('copy-assets', function() {

    gulp.src([
      './assets/**/*'
    ])
    .pipe(gulp.dest(path.join(process.cwd(), './public/')))

  })

}
