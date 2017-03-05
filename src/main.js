import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})



// Export components 
export {default as Button} from './components/button.vue'
export {default as Input} from './components/input.vue'
export {default as TextArea} from './components/textarea.vue'
export {default as Select} from './components/select.vue'
