<template lang="pug">
textarea.s-textarea(:placeholder="placeholder", :value="model", @input="change", :name='name', :class="classes")
</template>

<script>
export default {
  name: 's-textarea',
  props: {
    placeholder: {
      type: String,
      default: ""
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
  created: () => {

  }
}
</script>

<style lang="stylus">
@import '../style/theme.styl'
  
.s-textarea
  border-radius 2px
  border solid 1px #d6dae9
  outline none
  font-size 15px
  padding 15px 20px 15px 20px
  width 100%
  min-width 100px
  min-height 100px
  user-select none

  &:focus
    border 1px primary-theme-color solid
    transition border .5s
    
</style>
                                      
