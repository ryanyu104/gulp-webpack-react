var gulp = require('gulp')
var del = require('del')
var rev = require('gulp-rev')
var replace = require('gulp-replace')


function replaceFunc(match, p1) {
  var manifest = require(global.MANIFEST)
  return 'static/dist/' + manifest[p1]
}

gulp.task('release-rev', function () {
  return gulp.src(['static/build/css/**/*.css',
      'static/build/js/**/*.js',
      'static/build/img/**/*.+(png|gif|jpg|eot|woff|ttf|svg|ico)'
    ], { base: './static/build' })
    .pipe(gulp.dest('static/build/'))
    .pipe(rev())
    .pipe(gulp.dest('static/dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('static/build'))
})



gulp.task('css-js-replace', ['webpack-js', 'base-js', 'build-stylus', 'build-html', 'build-img'], function () {

})

gulp.task('html-replace', ['css-js-replace'], function () {
  return gulp.src('jupiter/templates')
    .pipe(replace(global.REGEX, replaceFunc))
    .pipe(gulp.dest('jupiter/templates'))
})

gulp.task('set-release', function () {
  global.is_production = true
})

gulp.task('release', ['set-release', 'release-rev', 'html-replace'], function (cb) {
  del(['/static/build'], cb)
})
