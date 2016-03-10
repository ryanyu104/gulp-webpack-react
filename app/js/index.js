import dlg_loading from './mods/modal/dlg_loading'
import App from './mods/_react_component.jsx'

dlg_loading({
  loading_title: '我是hbs头部3'
})

$('.js-article').on('click', function () {
  console.log('p1')
})
$('img').on('click', function () {
  $('.js-article').trigger('click')
})
ReactDOM.render(<App/>, document.getElementById('phone_form'))



