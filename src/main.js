import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// sync the router with the vuex store.
// this registers `store.state.route`
import { sync } from 'vuex-router-sync'
sync(store, router)

// Register Components Globally
import * as UI from './components'

Vue.component('s-breadcrumbs', UI.BreadCrumbs)
Vue.component('s-button', UI.Button)
Vue.component('s-input', UI.Input)
Vue.component('s-textarea', UI.TextArea)
Vue.component('s-select', UI.Select)
Vue.component('s-nav', UI.Nav)
Vue.component('s-tag', UI.Tag)
Vue.component('s-checkbox', UI.Checkbox)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


// Export components
export default UI
