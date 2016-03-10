// 引入 gulp
var gulp = require('gulp')

// 引入组件
var stylus = require('gulp-stylus')
var include = require('gulp-include')
var replace = require('gulp-replace')
var sourcemaps = require('gulp-sourcemaps')
var webpack = require('webpack')
var livereload = require('gulp-livereload')
var nib = require('nib')
var jeet = require('jeet')
  // 检查脚本
var IMG_FILE = global.IMG_FILE
var REGEX = global.REGEX
var REG_BUILD = global.REG_BUILD

gulp.task('build-html', function () {
  return gulp.src('app/html/**/*.html')
    .pipe(replace(REGEX, REG_BUILD))
    .pipe(gulp.dest('templates'))
    .pipe(livereload())
})

// 编译styl
gulp.task('build-stylus', function () {
  return gulp.src(['app/css/**/*.styl', '!app/css/**/_*.styl'])
    .pipe(sourcemaps.init())
    .pipe(stylus({ use: [nib(), jeet()], 'include css': true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('static/build/css'))
    .pipe(livereload())
})

// 合并，压缩文件
gulp.task('base-js', function () {
  return gulp.src('app/js/lib/*.js')
    .pipe(include())
    .pipe(gulp.dest('static/build/js/lib'))
    .pipe(livereload())
})

gulp.task('webpack-js', function () {
  return gulp.src('static/build/webpack/**/*.js')
    .pipe(gulp.dest('static/build/js'))
    .pipe(livereload())
})

gulp.task('build-img', function () {
  return gulp.src('app/img/*')
    .pipe(gulp.dest('static/build/img'))
    .pipe(livereload())
})

// 默认任务
gulp.task('dev', ['webpack-js', 'base-js', 'build-stylus', 'build-html', 'build-img'], function () {
  livereload.listen()
    // 监听文件变化
  gulp.watch('app/js/lib/*.js', function () {
    gulp.start('base-js')
  })
  gulp.watch('app/css/**/*.styl', function () {
    gulp.start('build-stylus')
  })
  gulp.watch('app/html/**/*.html', function () {
    gulp.start('build-html')
  })
  gulp.watch(IMG_FILE, function () {
    gulp.start('build-img')
  })
  gulp.watch('static/build/webpack/**/*.js', function () {
    gulp.start('webpack-js')
  })

})
