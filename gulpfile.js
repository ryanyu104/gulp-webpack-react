// 引入 gulp
var reqdir  = require('require-dir')

global.REGEX = /\{\{\{(\S*?)\}\}\}/g
global.REG_BUILD = '/static/build/$1'
global.IMG_FILE = 'app/img/**/*.+(png|gif|jpg|eot|woff|ttf|svg|ico)'

reqdir('./app/gulp/')
