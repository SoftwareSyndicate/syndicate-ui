<template lang="pug">
  div.s-button(@click="onclick()", :class="classes")
    span {{title}}
</template>

<script>
export default {
  name: 's-button',
  props: {
    title: {
      type: String,
      default: "button"
    },
    classes: {
      type: Array,
      default: () => []
    },
    onclick: {
      type: Function,
      default: () => {} 
    }
  },
}
</script>

<style lang="stylus">
@import '../theme.styl'
  
.s-button
  cursor pointer
  display flex
  align-items center
  justify-content center
  user-select none
  border-radius 4px
  color #787e98
  background-color #fff
  padding 20px
  box-shadow inset 0 -2px 0 0 rgba(187, 193, 214, 0.4)
  border solid 1px #bcc1d7
  font-size default-font-size
  flex-basis 100%
  font-weight 600
  white-space nowrap

  &:hover
    box-shadow none
    background-color darken(@background-color, 1%)

  &:active
    background-color darken(@background-color, 4%)

  //SIZES
  &.xs
    padding 6px 10px
    font-size sm-font-size
    font-weight 400

  
  &.s
    padding 12px 20px 12px 20px
    font-size sm-font-size
    font-weight 500

  &.l
    padding 20px 30px
    font-size lg-font-size
    font-weight 700

  &.xl
    padding 30px 40px
    font-size lg-font-size
    font-weight 700

   //THEMES 
  &.primary
    color primary-color
    background-color primary-background-color
    box-shadow inset 0 -2px 0 0 darken(primary-background-color, 30%)

    &:hover
      box-shadow none
      background-color darken(primary-background-color, 4%)

    &:active
      background-color darken(primary-background-color, 8%)

  &.secondary
    color secondary-color
    background-color secondary-background-color
    box-shadow inset 0 -2px 0 0 darken(secondary-background-color, 30%)

    &:hover
      box-shadow none
      background-color darken(secondary-background-color, 4%)

    &:active
      background-color darken(secondary-background-color, 8%)



  &.tertiary
    color tertiary-color
    background-color tertiary-background-color
    box-shadow inset 0 -2px 0 0 darken(tertiary-background-color, 30%)

    &:hover
      box-shadow none
      background-color darken(tertiary-background-color, 4%)

    &:active
      background-color darken(tertiary-background-color, 8%)



          
</style>
                                    
