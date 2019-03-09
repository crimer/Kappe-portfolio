const gulp        = require('gulp'),
      browserSync = require('browser-sync').create(),
      config      = require('../config');

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: 'build'
        },
        files: [
            config.build.all
        ],
        notify: false
    });
});