'use strict';

module.exports = function() {
  $.gulp.task('watch:debug', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process-debug'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'));
  });
};
