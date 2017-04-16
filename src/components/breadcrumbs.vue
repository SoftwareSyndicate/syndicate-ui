<template lang="pug">
div.breadcrumbs
  div.crumbs
    div.crumb(v-for="crumb in crumbs")
      router-link(:to="crumb.route") {{crumb.name}}

  div.actions-container    
    slot(name="actions")
</template>

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
  box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.15);
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

<script>
export default {
  name: 'BreadCrumbs',
  props: ['crumbs'],
}
</script>
