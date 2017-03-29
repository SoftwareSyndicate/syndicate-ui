<template lang="pug">
div.nav
  div.nav-header
    img.logo(alt="logo", src="http://www.clipartkid.com/images/141/transparent-peace-symbol-2-cnd-logo-wordpress-peacesymbol-org-ALtC6a-clipart.png")
    span.brand Syndicate UI
    
  div.nav-items
    div.item-container(v-for="item in nav_items")
      div.item-header
        h3 {{item.name}}
      
      div.sub-item-container(v-for="sub_item in item.sub_items")
        div.sub-item
          img(alt="icon" src="http://icons.iconarchive.com/icons/danieledesantis/playstation-flat/512/playstation-square-dark-icon.png")
          span {{sub_item.name}}
      
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 's-nav',
  computed: mapGetters ({
    nav_items: 'nav_items',
    active_nav_item: 'active_nav_item' 
  }),
  created(){
    console.log(this.nav_items);
  }
}
</script>

<style lang="stylus">
  
@import '../theme.styl'

nav-height = 60px
nav-background-color = #f6f8ff

.nav
  width 100%
  height 100%
  background-color nav-background-color

  .nav-header
    display flex
    flex-basis 100%
    align-items center
    height nav-height
    border-bottom solid 1px #e7eaf3
    margin-bottom 60px

    .logo
      width 24px
      height 24px
      margin-right 20px
      
    .brand
      font-size 1em
      font-weight bold

  .nav-items
    display flex
    flex-wrap wrap
    
    .item-container
      flex-basis 100%
      
      .item-header
        border-bottom 1px solid darken(nav-background-color, 10%)
        margin-bottom 7px
      
      h3
        padding-left 14px
        font-size 14px
        font-weight normal
        padding-bottom 7px

      .sub-item-container
        padding 7px 14px
        
        .sub-item
          display flex
          align-items center
        
          img
            width 16px
            height 16px
            margin-right 16px

          span
            font-size 14px
    
</style>
                                      
