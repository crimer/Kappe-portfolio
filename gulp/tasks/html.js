const gulp         = require('gulp'),
      browserSync  = require('browser-sync'),
      plumber      = require('gulp-plumber'),
      config       = require('../config.js');

gulp.task('html', function() {
    return gulp
        .src(config.assets.html + '/*.html')
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(gulp.dest(config.build.html))
        .pipe(browserSync.reload({ stream:true}))
});

gulp.task('html_watch', function() {
    gulp.watch(config.assets.html + '/*.html', ['html']);
});