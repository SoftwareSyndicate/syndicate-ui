<template lang="pug">
  div.s-checkbox(@click="onclick()", :class="classes")
    p checkbox
</template>

<script>
export default {
  name: 's-checkbox',
  props: {
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
  
.s-checkbox
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


          
</style>
                                    
