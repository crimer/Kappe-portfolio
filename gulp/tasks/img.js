const gulp                      = require('gulp'),
      imagemin                  = require('gulp-imagemin'),
      imageminJpegRecompress    = require('imagemin-jpeg-recompress'),
      pngquant                  = require('imagemin-pngquant'),
      browserSync               = require('browser-sync'),
      plumber                   = require('gulp-plumber'),
      cache                     = require('gulp-cache'),
      config                    = require('../config');

gulp.task('img', function() {
    return gulp
        .src(config.assets.img + '/**/*.*')
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(cache(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminJpegRecompress({
              loops: 5,
              min: 65,
              max: 70,
              quality:'medium'
            }),
            imagemin.svgo(),
            imagemin.optipng({optimizationLevel: 3}),
            pngquant({quality: '65-70', speed: 5})
          ],{
            verbose: true
          })))
        .pipe(gulp.dest(config.build.img))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('img_watch', function() {
    gulp.watch(config.assets.img + '/**/*.*', ['img']);
});


