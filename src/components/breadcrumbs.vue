<template lang="pug">
div.breadcrumbs
  div.crumbs
    div.crumb(v-for="crumb in crumbs")
      router-link(:to="crumb.route") {{crumb.name}}

  div.actions-container    
    slot(name="actions")
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: ['crumbs'],
}
</script>

<style lang="stylus" scoped>

breadcrumbs-height = 60px;
breadcrumbs-background-color = #fe5e3b
breadcrumbs-color = #fff

.breadcrumbs
  background-color breadcrumbs-background-color
  display flex
  align-items center
  flex-basis 100%
  padding-left 1em
  height breadcrumbs-height
    
  .crumbs
    display flex
    align-items center
    font-size 15px
    
    .crumb
      display flex
      align-items center
      &:first-child
        margin-right 20px
      a
        font-weight 500
        margin-right 20px
        text-decoration none
        color breadcrumbs-color

  .actions-container
    margin-left auto
    margin-right 1em
        
</style>
