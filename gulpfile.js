'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js'),
    debug: require('./gulp/paths/debug.js'),
    admin: require('./gulp/paths/admin.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sprite:image',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:favicon',
    'copy:image',
    'copy:fonts',
    'copy:webglwater',
    'css:foundation'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));

$.gulp.task('dev', $.gulp.parallel('watch','serve'));
$.gulp.task('debug', $.gulp.parallel('watch:debug','serve'));
$.gulp.task('admin', $.gulp.parallel('watch:admin','serve'));

$.gulp.task('tasks', function(cb) {
    $.path.task.forEach(function(taskPath) { console.log(taskPath.split('/').pop()); });
    cb();
  }
);
