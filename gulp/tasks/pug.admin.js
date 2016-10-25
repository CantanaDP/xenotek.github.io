'use strict';

module.exports = function() {
  $.gulp.task('pug:admin', function() {
    return $.gulp.src('./source/template/admin/*.pug')
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root))
      .pipe($.gulp.dest($.config.php + '/app/views/templates'))
  });
};
