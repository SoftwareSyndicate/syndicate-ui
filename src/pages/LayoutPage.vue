<template lang="pug">
div#layout-page
  div.header
    h1 Layout

  div.row
    h3 .row

  div.row
    h3 .row
    div.row
      h3 .row

  div.row-50
    h3 .row-50

  div.row-75
    h3 .row-75
    

  div.row-flex
    h3 .row-flex

  div.row-flex
    h3 .row-flex
    div.row-flex
      h3 .row-flex


  div.row-flex-wrap
    h3 .row-flex-wrap

  div.row-flex-wrap
    h3 .row-flex-wrap
    div.row-flex-wrap
      h3 .row-flex-wrap

    
</template>


<style lang="stylus">
#layout-page
  display flex
  flex-wrap wrap
  
  .header
    flex-basis 100%
    border-bottom solid 1px black
    margin-bottom 2em

  .row, .row-flex, .row-flex-wrap, .row-50, .row-75
    text-align center
    border 1px gray dashed
    padding 1em
    margin-bottom 1em
</style>


<script>
export default {
  name: 'LayoutPage',
}
</script>
