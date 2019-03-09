const gulp        = require('gulp'),
      babel       = require('gulp-babel'),
      plumber     = require('gulp-plumber'),
      rigger      = require('gulp-rigger'),
      uglify      = require('gulp-uglify'),
      sourcemaps  = require('gulp-sourcemaps'),
      browserSync = require('browser-sync'),
      config      = require('../config');

gulp.task('js', function() {
    return gulp
        .src(config.assets.js + '/*.js')
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.build.js))
        .pipe(browserSync.reload({ stream:true}))
});

gulp.task('js_watch', function() {
    gulp.watch(config.assets.js + '/**/*.js', ['js']);
});