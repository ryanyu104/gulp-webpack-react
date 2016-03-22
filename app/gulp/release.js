var gulp = require('gulp')
var del = require('del')
var rev = require('gulp-rev')
var replace = require('gulp-replace')
var uglify = require('gulp-uglify')
var gutil = require('gulp-util')


function replaceFunc(match, p1) {
  var manifest = require(global.MANIFEST)
  return 'static/dist/' + manifest[p1]
}

gulp.task('release-js', ['webpack-js',
  'base-js',
  'build-img',
  'build-stylus',
  'build-html'
], function() {
  return gulp.src(['static/build/js/**/*.js', '!static/build/js/**/*.min.js'])
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('static/build/js'))
})

gulp.task('release-rev', ['release-js'], function() {
  return gulp.src(['static/build/css/**/*.css',
      'static/build/js/**/*.js',
      'static/build/img/**/*.+(png|gif|jpg|eot|woff|ttf|svg|ico)'
    ], { base: './static/build' })
    .pipe(gulp.dest('static/build/'))
    .pipe(rev())
    .pipe(gulp.dest('static/dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('static'))
})

gulp.task('css-js-replace', ['release-rev'], function() {
  return gulp.src(['static/dist/**/*.css', 'static/dist/**/*.js'])
    .pipe(replace(global.REGEX, replaceFunc))
    .pipe(gulp.dest('static/dist'))
})

gulp.task('html-replace', ['css-js-replace'], function() {
  return gulp.src('static/build/html/**/*.html')
    .pipe(replace(global.REGEX, replaceFunc))
    .pipe(gulp.dest('templates'))
})

gulp.task('set-release', function() {
  global.is_production = true
})

gulp.task('release', ['set-release', 'html-replace'], function(cb) {
  del(['/static/build'], cb)
})
