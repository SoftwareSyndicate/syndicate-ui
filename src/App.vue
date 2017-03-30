<template lang="pug">
div#app
  div.nav-container
    s-nav

  div.content-container
    div.breadcrumbs-container
      p breadcrumbs    
      // breadcrumbs

    div.view-container
      transition(name="fade", mode="out-in")
        router-view.vue

</template>

<script>
export default {
  name: 'app',
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
          {
            name: "TextArea",
            route: {
              name: 'textarea',
            }
          },
          {
            name: "Select",
            route: {
              name: 'select',
            }
          },
          {
            name: "Tag",
            route: {
              name: 'tag',
            }
          },
        ]
      },
      {
        name: "Typography",
        sub_items: [
          {
            name: "All",
            route: {
              name: 'typography',
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

    .view-container
      flex-basis 100%

      .fade-enter-active, .fade-leave-active
        transition all .2s ease

      .fade-enter, .fade-leave-active
        opacity 0

      
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
