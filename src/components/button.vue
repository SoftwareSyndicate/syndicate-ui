<template lang="pug">
  div.s-button(@click="onclick(value)", :class="classes")
    span {{title}}
</template>

<style lang="stylus">
@import '../style/theme.styl'
  
.s-button
  cursor pointer
  display flex
  align-items center
  justify-content center
  user-select none
  color #787e98
  background-color #fff
  border-radius 3px
  border solid 1px #bcc1d7
  font-size 13px
  font-weight 500
  white-space nowrap
  padding 10px 18px

  span
    line-height 1em

  &:hover
    box-shadow none
    background-color darken(@background-color, 1%)

  &:active
    background-color darken(@background-color, 4%)

  //SIZES
  &.xs
    padding 6px 8px
    font-size 10px
    font-weight 400
  
  &.s
    padding 7px 10px
    font-size 12px
    font-weight 500

  &.l
    padding 14px 32px
    font-size 14px
    font-weight 600


  &.xl
    padding 18px 44px
    font-size 16px
    font-weight 600


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
    },
    value: {}
  },
}
</script>

