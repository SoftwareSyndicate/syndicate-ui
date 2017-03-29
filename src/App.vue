<template lang="pug">
div#app
  div.nav-container
    s-nav

  div.content-container
    div.breadcrumbs-container
      p breadcrumbs    
      // breadcrumbs

    div.view-container
      router-view.vue

      
  // div.components
  //   div.component
  //     h1 Button
  //     h3 Sizes
  //     div.sizes(v-for="size in sizes")
  //       span.info {{size}}
  //       s-button(:classes="[size]")

  //     h3 Theme
  //     div.themes(v-for="theme in themes")
  //       span.info {{theme}}
  //       s-button(:classes="[theme]")

  //   div.component
  //     h1 Input
  //     h3 Sizes
  //     div.sizes(v-for="size in sizes")
  //       span.info {{size}}
  //       s-input(:classes="[size]")

  //     h3 States
  //     div.themes(v-for="state in states")
  //       span.info {{state}}
  //       s-input(:classes="[state]")

  //   div.component
  //     h1 TextArea
  //     h3 Sizes
  //     div.sizes(v-for="size in sizes")
  //       span.info {{size}}
  //       s-textarea(:classes="[size]")

  //     h3 Theme
  //     div.themes(v-for="theme in themes")
  //       span.info {{theme}}
  //       s-textarea(:classes="[theme]")


  //   div.component
  //     h1 Select
  //     s-select(:items="['item 1', 'item 2', 'item 3']")

</template>

<script>

import * as ui from './components'

export default {
  name: 'app',
  components: {
    's-nav': ui.Nav,
    's-button': ui.Button,
    's-input': ui.Input,
    's-textarea': ui.TextArea,
    's-select': ui.Select,
    's-tag': ui.Tag,
  },
  data() {
    return {
      sizes: ['sm', 'default', 'lg'],
      states: ['default', 'error', 'warning', 'good'],
      themes: ['default', 'primary', 'secondary', 'tertiary'],
    }
  },
  created(){
    let nav_items = [
      {
        name: "Components",
        sub_items: [
          {
            name: "Button",
            route: {
              name: 'button',
            }
          },
          {
            name: "Input",
            route: {
              name: 'input',
            }
          },
        ]
      },
    ]
    this.$store.commit("NAV_SET_ITEMS", {nav_items})
  }
}
</script>

<style lang="stylus">

body
  margin 0px
  height 100vh
  
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height 100%
  display flex
  flex-wrap wrap

  .nav-container
    display flex
    flex-basis 15%  

  .content-container
    flex-basis 85%  
    flex-wrap wrap  
    
    .breadcrumbs-container
      flex-basis 100%



      
h1, h2, h3, h4, h5, h6
  margin 0px
  font-weight normal

.components
  display flex
  flex-wrap wrap

  .component
    display flex
    flex-wrap wrap
    flex-basis 100%
    margin-bottom 30px

    h1, h3
      flex-basis 100%

    .info
      flex-basis 100%

    .sizes
      display flex
      flex-wrap wrap
      text-align center
      margin-right 2em
      margin-bottom 10px
      
    .themes
      text-align center
      margin-right 2em
      margin-bottom 10px


</style>
