<template lang="pug">
div#app
  div.nav-container
    s-side-nav.desktop(:items="nav_items")
    s-top-nav.mobile(:items="nav_items")

  div.content-container
    div.breadcrumbs-container
      s-breadcrumbs(:crumbs="crumbs")
    div.view-container
      transition(name="fade", mode="out-in")
        router-view.vue

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data() {
    return {}
  },
  computed: mapGetters ({
    nav_items: 'nav_items',
    crumbs: 'crumbs',
  }),
  created(){
    console.log(this.$style)
  }
}
</script>

<style lang="stylus">
@import './typography.styl'
@import './layout.styl'

mobile = 600px
desktop = 601px

.mobile 
  @media screen and (min-width: mobile)
    display none

.desktop 
  @media screen and (max-width: desktop)
    display none

    
body
  margin 0px
  height 100vh
  
#app
  display flex
  flex-wrap wrap
  
  @media screen and (min-width: desktop)
    flex-wrap nowrap
    height 100vh

  .nav-container
    display flex
    flex-basis 100%

    @media screen and (min-width: desktop)
      flex-basis 15%


  .content-container
    flex-basis 100%
    flex-wrap wrap

    @media screen and (min-width: desktop)
      flex-basis 85%  

    
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

</style>
