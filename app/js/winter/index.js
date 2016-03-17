import dlg_loading from 'mods/modal/dlg_loading'
import App from 'mods/_react_component.jsx'

dlg_loading({
  loading_title: '我是hbs头部31'
})

$('.js-article').css('color','red')

ReactDOM.render(<App/>, document.getElementById('phone_form'))
