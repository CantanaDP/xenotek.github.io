'use strict';

module.exports = function() {

  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/app.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.pxtorem({
        propWhiteList: ['font', 'font-size', 'line-height', 
        'letter-spacing','margin','margin-bottom','margin-top',
        'padding','padding-bottom','padding-top']
      }))
      .pipe($.gp.replace('PX', 'px'))
/*
      .pipe($.gp.cssUnit({
            type     :    'px-to-rem',
            rootSize :    16
        }))*/
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.gulp.dest($.config.php + '/assets/css'))
      .pipe($.browserSync.stream());
  });
};
