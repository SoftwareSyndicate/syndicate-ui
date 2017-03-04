<template lang="pug">
textarea.s-textarea
</template>

<script>
export default {
  name: 's-textarea',
  props: {
    placeholder: {
      type: String,
      default: "title"
    }
  },
  created: () => {
    console.log(this.$style);
  }
}
</script>

<style lang="stylus">
textarea.s-textarea
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
    border 1px #9b59b6 solid
    transition border .5s
    
</style>
                                      
