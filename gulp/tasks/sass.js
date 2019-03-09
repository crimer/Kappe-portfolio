const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      sourcemaps   = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync  = require('browser-sync'),
      cleanCSS     = require('gulp-clean-css'),
      plumber      = require('gulp-plumber'),
      config       = require('../config');

const autoprefixerList = [
    'Chrome >= 45',
    'Firefox ESR',
    'Edge >= 12',
    'Explorer >= 10',
    'iOS >= 9',
    'Safari >= 9',
    'Android >= 4.4',
    'Opera >= 30'
];

gulp.task('sass', function() {
    return gulp
        .src(config.assets.sass + '/app.sass')
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded',precision: 5}))
        // .on('error', config.errorHandler)
        .pipe(autoprefixer({ browsers: ['> 1%', 'last 4 versions'], cascade: false }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.build.css))
        .pipe(browserSync.reload({ stream:true}))
});

gulp.task('sass_watch', function() {
    gulp.watch(config.assets.sass + '/**/*.sass', ['sass']);
});