const gulp         = require('gulp'),
      browserSync  = require('browser-sync'),
      plumber      = require('gulp-plumber'),
      config       = require('../config');

gulp.task('lib', function () {
    return gulp
        .src(config.assets.lib + '/**/*.*')
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(gulp.dest(config.build.lib))
        .pipe(browserSync.reload({ stream:true}))
});

gulp.task('lib_watch', function () {
    gulp.watch(config.assets.lib + '/**/*.*', ['lib']);
});