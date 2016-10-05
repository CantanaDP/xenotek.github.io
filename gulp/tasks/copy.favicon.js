'use strict';

module.exports = function() {
  $.gulp.task('copy:favicon', function() {
    return $.gulp.src('./source/images/favicon/*.*', { since: $.gulp.lastRun('copy:favicon') })
      .pipe($.gulp.dest($.config.root + '/assets/img/favicon/'));
  });
};
