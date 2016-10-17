'use strict';

module.exports = function() {
  $.gulp.task('copy:webglwater', function() {
    return $.gulp.src('./source/js/water.js', { since: $.gulp.lastRun('copy:fonts') })
      .pipe($.gulp.dest($.config.root + '/assets/js'));
  });
};
