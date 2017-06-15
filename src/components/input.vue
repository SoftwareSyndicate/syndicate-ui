<template lang="pug">
  input.s-input(:placeholder="placeholder",  :type="type", :value="value", @input="onInput($event.target.value)", :name='name', :class="classes")
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
    value: {
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
  methods: {
    onInput(value){
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="stylus">

@import '../style/theme.styl'

.s-input
  border-radius 4px
  background-color input--color--background
  border solid 0.5px #d6dae9
  outline none
  font-size default-font-size
  user-select none
  flex-basis 100%
  font-size 13px
  padding 11px 20px
  height 32px


  &:disabled
    background-color input--color--background-disabled

  &:focus
    border 1px primary-theme-color solid
    transition border .5s

  // Sizes
  // &.xs // this is not in spec?
  //   font-size 11px
  //   padding 5px 20px

  &.s
    font-size 12px
    padding (6/12)em (20/12)em

  &.m
    font-size 13px
    padding (11/13)em (20/13)em

  &.l
    font-size 14px
    padding (15/14)em (20/14)em


  &.xl
    font-size 14px
    padding (21/14)em (20/14)em (19/14)em (20/14)em


</style>
