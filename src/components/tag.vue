<template lang="pug">
span.s-tag(:class="classes") {{name}}
</template>

<script>
export default {
  name: 's-tag',
  props: {
    name: {
      type: String,
      default: ""
    },
    classes: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style lang="stylus">
@import '../theme.styl'
  
.s-tag
  outline none
  font-size default-font-size
  user-select none
  flex-basis 100%

  // Sizes
  &.sm
    font-size sm-font-size
    padding 10px

  &.lg
    font-size lg-font-size
    padding 30px
    
</style>
                                      
