'use strict';

module.exports = function() {
  $.gulp.task('js:process-admin', function() {
    return $.gulp.src($.path.admin)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('admin.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
      .pipe($.gulp.dest($.config.php + '/assets/js'))
  })
};
