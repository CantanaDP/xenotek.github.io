'use strict';

module.exports = function() {
    $.gulp.task('sprite:image', function() {
        return $.gulp.src('./source/sprites/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss'
                // padding: 20
            }))
            .pipe($.gulp.dest($.config.root + '/assets/img'))
    })
};