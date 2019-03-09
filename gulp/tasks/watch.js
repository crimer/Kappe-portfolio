const gulp   = require('gulp');

gulp.task("watch", [
  "fonts_watch",
  "stylus_watch",
  "img_watch",
  "js_watch",
  "html_watch",
  // 'svg_watch',
  "lib_watch"
]);