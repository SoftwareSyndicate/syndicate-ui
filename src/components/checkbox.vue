<template lang="pug">
  div.s-checkbox(ref="checkbox", @click="onclick()", :class="c_classes")
</template>

<script>
export default {
  name: 's-checkbox',
  props: {
    classes: {
      type: Array,
      default: () => []
    },
  },
  data(){
    return {
      active: false,
      disabled: false,

      bannedClasses: ['active', 'disabled'],
    }
  },
  computed: {
    c_classes(){
      let cls = this.classes.filter(c => !this.bannedClasses.includes(c)) // shallow copy the classes array, removing bannedClasses
      // conditionally add other classes
      if(this.active){
        cls.push('active')
      }
      if(this.disabled){
        cls.push('disabled')
      }
      return cls
    },

    isActive(){
      return this.active || this.$refs.checkbox.classList.contains('active')
    },
    isDisabled(){
      return this.disabled || this.$refs.checkbox.classList.contains('disabled')
    }
  },
  mounted(){
    if(this.classes.includes('active') && !this.active){
      this.active = true
    }
  },
  methods: {
    onclick(){
      if(this.isDisabled){
        return
      }
      this.active = !this.active
      this.$emit('change',this.isActive)
    },
  }
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
  background-color checkbox--color--background-inactive
  border-radius 4px
  border solid 1px checkbox--color--border-inactive
  font-size 13px
  font-weight 500
  height 0
  width 0
  white-space nowrap
  padding 10px 10px
  position relative

  &:after
    position absolute
    content ''
    display block
    width 3px
    height 6px
    border solid checkbox--color--checkmark
    border-width 0 2px 2px 0
    transform rotate(45deg)

  &.active
    background-color checkbox--color--background-active
    border solid 1px checkbox--color--border-active
    &:after
      border-color checkbox--color--checkmark

  &.disabled,&:disabled
    opacity 0.6

  span
    line-height 1em

  //SIZES
  // &.xs
  //   padding 6px 8px
  //   font-size 10px
  //   font-weight 400

  &.s
    padding 9px 9px
    font-size 12px

  &.m
    padding 12px 12px
    font-size 12px

  // &.l
  //   padding 14px 32px
  //   font-size 14px
  //   font-weight 600

  // &.xl
  //   padding 18px 44px
  //   font-size 16px
  //   font-weight 600



</style>
