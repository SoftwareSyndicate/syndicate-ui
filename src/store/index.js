import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import nav from './modules/nav'

Vue.use(Vuex)

const state = {
  crumbs: []
}

const store = new Vuex.Store({
  state,
  getters,
  modules: {
    nav,
  }
})

export default store
