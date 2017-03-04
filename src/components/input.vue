<template lang="pug">
    input.s-input(:placeholder="placeholder", :type="type")
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
    }
  },
  created: () => {
    console.log(this.$style);
  }
}
</script>

<style lang="stylus">
input.s-input
  border-radius 2px
  border solid 1px #d6dae9
  outline none
  font-size 15px
  padding 20px 20px 20px 20px
  width 100%
  min-width 100px
  user-select none

  &:focus
    border 1px #9b59b6 solid
    transition border .5s
    
    
</style>
                                      
