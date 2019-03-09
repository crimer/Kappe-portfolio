const gulp     = require('gulp'),
      svgmin   = require('gulp-svgmin'),
      changed  = require('gulp-changed'),
      plumber  = require('gulp-plumber'),
      config   = require('../config');

gulp.task('svg', function() {
    return gulp
        .src(config.assets.svg + '/**/*.svg')
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(changed(config.build.svg))
        .pipe(svgmin({
            js2svg: {
                pretty: true
            },
            plugins: [{
                removeDesc: true
            }, {
                cleanupIDs: true
            }, {
                mergePaths: false
            }]
        }))
        .pipe(gulp.dest(config.build.svg));
});

gulp.task('svg_watch', function() {
    gulp.watch(config.assets.svg + "/**/*.svg", ["svg"]);
});
