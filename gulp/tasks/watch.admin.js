'use strict';

module.exports = function() {
  $.gulp.task('watch:admin', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process-admin'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass:admin'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug:admin'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'));
  });
};
