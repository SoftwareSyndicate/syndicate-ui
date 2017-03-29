import Vue from 'vue'
import Vuex from 'vuex'

import breadcrumbs from './modules/breadcrumbs'
import nav from './modules/nav'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    breadcrumbs,
    nav,
  }
})

export default store
