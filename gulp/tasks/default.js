const gulp        = require('gulp'),
      runSequence = require('run-sequence').use(gulp),
      config      = require('../config');

gulp.task('default', function() {
    runSequence(
        'copy',
        'server',
        'watch'
    );
});
