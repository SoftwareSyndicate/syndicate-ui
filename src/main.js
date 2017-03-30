import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as UI from './components'

// Register Components Globally 
Vue.component('s-button', UI.Button)
Vue.component('s-input', UI.Input)
Vue.component('s-textarea', UI.TextArea)
Vue.component('s-select', UI.Select)
Vue.component('s-nav', UI.Nav)
Vue.component('s-tag', UI.Tag)


import { sync } from 'vuex-router-sync'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})




// Export components 
export {default as Button} from './components/button.vue'
export {default as Input} from './components/input.vue'
export {default as TextArea} from './components/textarea.vue'
export {default as Select} from './components/select.vue'
