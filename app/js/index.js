import dlg_loading from './mods/modal/dlg_loading'
import App from './mods/_react_component.jsx'

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

$('.js-article').css('color', 'red')

ReactDOM.render(<App/>, document.getElementById('phone_form'))
