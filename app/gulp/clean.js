var gulp   = require('gulp');
var del = require('del')

gulp.task('clean', function(cb) {
  del(['static/build/*',
    'static/dist',
    'templates/*'
  ], cb)
})
