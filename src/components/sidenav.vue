<template lang="pug">
div.sidenav
  div.nav-header
    img.logo(alt="logo", :src="logo")
    span.brand {{brand}}
    
  div.nav-items
    div.item-container(v-for="item in items")
      div.item-header(v-if="item.name")
        h3 {{item.name}}
      
      div.sub-item-container(v-for="sub_item in item.sub_items")
        router-link.sub-item(:to='{name: sub_item.route.name}' tag="div")
          img(alt="icon" src="http://icons.iconarchive.com/icons/danieledesantis/playstation-flat/512/playstation-square-dark-icon.png")
          span {{sub_item.name}}
      
</template>

<script>

export default {
  name: 's-sidenav',
  props: {
    items: {
      type: Array,
      default: []
    },
    brand: {
      type: String,
      default: "Brand"
    },
    logo: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Hidari_mitsudomoe.svg/388px-Hidari_mitsudomoe.svg.png"
    }
  }
}
</script>

<style lang="stylus">
  
@import '../style/theme.styl'


nav-height = 60px
nav-header-background-color = #2f3a48
nav-brand-color = #fafbff
nav-background-color = #3c4858
nav-box-shadow-color = #a2a3a7

item-header-color = #d9e6ff
item-header-border-bottom = solid 0.5px #293441

nav-item-color = rgba(236, 239, 249, 0.91)
nav-item-background-color-active = #99a6cc
nav-item-box-shadow-active =  0 1px 0 0 #2f3a48
nav-item-color-active =  #fff

  
.sidenav
  width 100%
  height 100%
  background-color nav-background-color
  border solid 0.5px #293441

  .nav-header
    display flex
    flex-basis 100%
    align-items center
    height nav-height - 2px
    background-color nav-header-background-color
    box-shadow 0 1px 2px 0 rgba(60, 72, 88, 0.2)
    border solid 0.5px #293441

    .logo
      width 24px
      height 24px
      margin-right 20px
      
    .brand
      color nav-brand-color
      font-size 1em
      font-weight bold

  .nav-items
    padding-top 60px
    display flex
    flex-wrap wrap
      
    .item-container
      flex-basis 100%
      margin-bottom 2em
      
      .item-header
        border-bottom item-header-border-bottom
        margin-bottom 7px
        color item-header-color
      
      h3
        padding-left 14px
        font-size 14px
        font-weight normal
        padding-bottom 7px

      .sub-item-container
        padding 7px 28px 7px 14px
        
          
        .sub-item
          display flex
          align-items center
          padding 7px 5px
          cursor pointer
          transition all .3s ease-in-out
          font-weight 600
          color nav-item-color
          
          &.router-link-active
            box-shadow nav-item-box-shadow-active
            background-color nav-item-background-color-active
            color nav-item-color-active
            border-radius 2px

          &:hover
            box-shadow nav-item-box-shadow-active
            background-color  nav-item-background-color-active
            color nav-item-color-active
            border-radius 2px
                        
          img
            width 16px
            height 16px
            margin-right 16px

          span
            font-size 12px
    
</style>
                                      
