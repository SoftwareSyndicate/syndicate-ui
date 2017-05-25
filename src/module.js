// export vue-plugin that will install components
import * as UI from './components'

export default class SyndicateUI {
  static install(Vue, options){

    // install components
    Vue.component('s-breadcrumbs', UI.BreadCrumbs)
    Vue.component('s-button', UI.Button)
    Vue.component('s-input', UI.Input)
    Vue.component('s-textarea', UI.TextArea)
    Vue.component('s-select', UI.Select)
    Vue.component('s-side-nav', UI.SideNav)
    Vue.component('s-top-nav', UI.TopNav)
    Vue.component('s-tag', UI.Tag)
    Vue.component('s-checkbox', UI.Checkbox)
  }
}
