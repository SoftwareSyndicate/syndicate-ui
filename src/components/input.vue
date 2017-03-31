<template lang="pug">
input.s-input(:placeholder="placeholder",  :type="type", :value="model", @input="change", :name='name', :class="classes")
</template>

<script>
export default {
  name: 's-input',
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    model: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    change: {
      type: Function,
      default: () => {}
    },
    classes: {
      type: Array,
      default: () => []
    },
  },
  created(){

  },
}
</script>

<style lang="stylus">
  
@import '../theme.styl'
  
.s-input
  border-radius 2px
  border solid 0.5px #d6dae9
  outline none
  font-size default-font-size
  user-select none
  flex-basis 100%
  font-size 13px
  padding 11px 20px
  height 32px


  &:disabled
    background-color #f6f8ff
  
  &:focus
    border 1px primary-theme-color solid
    transition border .5s

  // Sizes
  &.xs
    font-size 11px
    padding 5px 20px
  
  &.s
    font-size 12px
    padding 6px 20px

  &.l
    font-size 14px
    padding 15px 20px


  &.xl
    font-size 15px
    padding 20px 20px

        
</style>
                                      
