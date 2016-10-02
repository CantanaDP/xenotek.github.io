'use strict';

module.exports = function() {
    $.gulp.task('sprite:image', function(cb) {
    		var png = $.gulp.src('./source/images/icons-png/*.png')
      			.pipe($.gp.imagemin())
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                imgPath: '../img/sprite.png',
                cssName: '_spritepng.scss',
                padding: 20,
                algorithm: 'top-down'
            }));
        png.img.pipe($.gulp.dest('./source/images/'));//$.config.root +
				png.css.pipe($.gulp.dest('./source/style/common/'));
				cb();
    });
};