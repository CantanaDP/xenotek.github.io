'use strict';

module.exports = function() {
  $.gulp.task('js:process-debug', function() {
    return $.gulp.src($.path.debug)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('test.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
