<template lang="pug">
  div.s-select(@click="open = !open")
    div.disclosure-icon
    div.selected-item(:ref="'select'")
      p(v-if="model === ''") {{placeholder}}
      p(v-else) {{model}}

    transition(name="open", mode="out-in")
      div.items(v-if="open")
        div.item(v-for="item in items", @click="onSelect(item)")
          span {{item}}
</template>

<script>
export default {
  name: 'Syndicate-Select',
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "text"
    },
    model: {
      type: String,
      default: ""
    },
    onSelect: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      open: false,
    }
  },
  created() {
    document.body.addEventListener('click', event => {
      if(event.target != this.$refs.select){
        this.open = false;
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../theme.styl'

.s-select
  height 60px
  border-radius 4px
  border solid 1px #d6dae9
  outline none
  font-size 15px
  width 100%
  min-width 100px
  display flex
  align-items center
  padding-left 20px
  position relative
  cursor pointer
  user-select none

  .selected-item
    display flex
    flex-basis 100%
    align-items center
    height 100%

  .open-enter-active, .open-leave-active
    transition all .3s ease

  .open-enter, .open-leave-active
    opacity 0
    height 0px

  .items
    border solid 1px #d6dae9
    position absolute
    top 60px
    left -1px
    width 100%
    display flex
    flex-wrap wrap
    z-index 3
    background-color white

    .item
      padding 15px 20px 15px 20px
      display flex
      flex-basis 100%
      align-items center
      border-bottom solid 1px #d6dae9

      &:last-child
        border-bottom none

      &:hover
        background-color #d6dae9

  .disclosure-icon
    position absolute
    right 20px
    pointer-events none // allows the disclosure to be 'clickable' because the thing behind it is clickable
    width 0
    height 0
    border-left 5px solid transparent
    border-right 5px solid transparent
    border-top 6px solid select--color--disclosure
</style>
