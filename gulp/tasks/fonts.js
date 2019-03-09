const gulp         = require('gulp'),
      browserSync  = require('browser-sync'),
      plumber      = require('gulp-plumber'),
      config       = require('../config');

gulp.task('fonts', function () {
    return gulp.src(config.assets.fonts + '/*.*')
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(gulp.dest(config.build.fonts))
        .pipe(browserSync.reload({ stream:true}))
});

gulp.task('fonts_watch', function () {
    gulp.watch(config.assets.fonts + '/**/*.*', ['fonts']);
});