import tmpl from './tmpl_loading.hbs'

export default function (options) {
  let default_opt = {
    loading_title: '我是hbs头部1',
    loading_info: '我是hbs主体1'
  }
  options = Object.assign(default_opt, options)
  let $tmpl = $(tmpl(options))
  $('body').append($tmpl)

  return $tmpl
}
