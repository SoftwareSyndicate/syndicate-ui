import * as types from '../mutation-types'

// initial state
const state = {
  crumbs: [],
  active_crumb: {}
}

// getters
const getters = {
  crumbs: state => state.crumbs,
  active_crumb: state => state.active_crumb
}

// actions
const actions = {
  // set_crumbs ({ commit, state }, crumbs) {
  //   commit(types.SET_CRUMBS, crumbs)
  // }
}

// mutations
const mutations = {
  [types.SET_CRUMBS] (state, { crumbs }) {
    state.crumbs = crumbs
  },

  [types.SET_ACTIVE_CRUMB] (state, { crumb }) {
    state.active_crumb = crumb
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
