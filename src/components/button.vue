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
color = #787e98
background-color = #fff
  
primary-color = #fff
primary-background-color = #3ed783
    
.s-button
  cursor pointer
  display flex
  align-items center
  justify-content center
  user-select none
  min-width 100px
  border-radius 4px
  color color
  background-color background-color
  padding 20px
  box-shadow inset 0 -2px 0 0 rgba(187, 193, 214, 0.4)
  border solid 1px #bcc1d7

  span
    font-size 16px
    font-weight 600
    color color

  &:hover
    box-shadow none
    background-color darken(background-color, 1%)

  &:active
    background-color darken(background-color, 4%)

  &.sm
    padding 12px 20px 12px 20px
    min-width 0px
     
    span
      font-size 13px
      font-weight 500

  &.primary
    background-color primary-background-color
    box-shadow none
    border none
    span
      color primary-color

          
</style>
                                    
