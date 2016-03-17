// 引入 gulp
var gulp = require('gulp')

// 引入组件
var stylus = require('gulp-stylus')
var fs = require('fs')
var include = require('gulp-include')
var replace = require('gulp-replace')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')
var mincss = require('gulp-cssnano')
var cache = require('gulp-cached')
var webpack = require('webpack')
var livereload = require('gulp-livereload')
var gulpif = require('gulp-if')
var nib = require('nib')
var jeet = require('jeet')
  // 检查脚本
var IMG_FILE = global.IMG_FILE
var REGEX = global.REGEX
var REG_BUILD = global.REG_BUILD


var css_path = 'app/css'
var dirs = fs.readdirSync(css_path)
var STYLUS_TASKS = []

dirs.forEach(function (item) {
  if (fs.statSync(css_path + '/' + item).isDirectory()) {
    STYLUS_TASKS.push(item)
  }
})

for (var i = 0; i < STYLUS_TASKS.length; i++) {
  (function (i) {
    gulp.task('build-stylus-' + STYLUS_TASKS[i], function () {
      return gulp.src(['app/css/' + STYLUS_TASKS[i] + '/*.styl', '!app/css/' + STYLUS_TASKS[i] + '/_*.styl'])
        .pipe(gulpif(!global.is_production, plumber()))
        .pipe(gulpif(!global.is_production, sourcemaps.init()))
        .pipe(stylus({ use: [nib(), jeet()], 'include css': true }))
        .pipe(gulpif(!global.is_production, sourcemaps.write()))
        .pipe(replace(REGEX, REG_BUILD))
        .pipe(gulp.dest('static/build/css/' + STYLUS_TASKS[i]))
        .pipe(livereload())
    })
  })(i)
}

gulp.task('build-html', function () {
  return gulp.src('app/html/**/*.html')
    .pipe(cache())
    .pipe(gulpif(!global.is_production, replace(REGEX, REG_BUILD)))
    .pipe(gulpif(!global.is_production, gulp.dest('templates'), gulp.dest('static/build/html')))
    .pipe(livereload())
})

// 编译styl
gulp.task('build-stylus', function () {
  return gulp.src(['app/css/**/*.styl', '!app/css/**/_*.styl'])
    .pipe(cache())
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({ use: [nib(), jeet()], 'include css': true }))
    .pipe(sourcemaps.write())
    .pipe(gulpif(global.is_production, mincss({ safe: true }), replace(REGEX, REG_BUILD)))
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
    .pipe(cache())
    .pipe(gulp.dest('static/build/js'))
    .pipe(livereload())
})

gulp.task('build-img', function () {
  return gulp.src('app/img/*')
    .pipe(cache())
    .pipe(gulp.dest('static/build/img'))
    .pipe(livereload())
})

// 默认任务
gulp.task('dev', ['webpack-js', 'base-js', 'build-stylus', 'build-html', 'build-img'], function () {
  global.is_production = false
  livereload.listen()

  for(var i=0; i<STYLUS_TASKS.length; i++) {
    (function(i) {
      gulp.watch('app/css/' + STYLUS_TASKS[i] +'/**/*.styl', function() {
        gulp.start('build-stylus-'+STYLUS_TASKS[i])
      })
    })(i)
  }
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
