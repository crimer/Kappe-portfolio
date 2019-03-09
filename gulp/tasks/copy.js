const gulp     = require('gulp'),
      config   = require('../config.js');

gulp.task('copy_fonts', function () {
    return gulp
        .src(config.assets.fonts + '/*.*')
        .pipe(gulp.dest(config.build.fonts));
});

gulp.task('copy_lib', function () {
    return gulp
        .src(config.assets.lib + '/**/*.*')
        .pipe(gulp.dest(config.build.lib));
});

gulp.task('copy_html', function() {
    return gulp
        .src(config.assets.html + '/*.html')
        .pipe(gulp.dest(config.build.html))
});

gulp.task('copy_js', function() {
    return gulp
        .src(config.assets.js + '/*.{js,json}')
        .pipe(gulp.dest(config.build.js))
});

gulp.task('copy_sass', function() {
    return gulp
        .src(config.assets.sass + '/*.{sass,scss}')
        .pipe(gulp.dest(config.build.css))
});

gulp.task('copy_img', function () {
    return gulp
        .src(config.assets.img + '/**/*.*')
        .pipe(gulp.dest(config.build.img));
});

gulp.task('copy', [
    'copy_img',
    // 'copy_sass',
    'copy_lib',
    // 'copy_js',
    'copy_html',
    'copy_fonts'
]);