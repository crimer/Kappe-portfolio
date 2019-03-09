const gulp   = require('gulp'),
      del    = require('del'),
      util   = require('gulp-util'),
      config = require('../config.js');

gulp.task('del', function() {
    return del([config.build.all]).then(function(paths) {
        console.log("Deleted:", util.colors.magenta(paths.join("\n")));
    });
});
