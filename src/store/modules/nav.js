import * as types from '../mutation-types'

// initial state
const state = {
  nav_items: [],
  nav_active_item: {}
}

// getters
const getters = {
  nav_items: state => state.nav_items,
  nav_active_item: state => {
    return state.nav_items.find((item)=>{
      return item.route.name === state.route.name
    })
  }
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.NAV_SET_ITEMS] (state, { nav_items }) {
    console.log(nav_items);
    console.log(state);
    state.nav_items = nav_items
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
