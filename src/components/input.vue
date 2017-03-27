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
    console.log(this.$style)
  },
}
</script>

<style lang="stylus">
  
@import '../theme.styl'
  
input.s-input
  border-radius 2px
  border solid 1px #d6dae9
  outline none
  font-size default-font-size
  padding 20px
  user-select none
  flex-basis 100% 

  &:focus
    border 1px primary-theme-color solid
    transition border .5s

  // Sizes
  &.sm
    font-size sm-font-size
    padding 10px

  &.lg
    font-size lg-font-size
    padding 30px
    
</style>
                                      
