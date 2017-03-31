<template lang="pug">
div#typography-page
  div.header
    h1 Typography

  div.body
    div.row
      h3 Headers

      div.row
        h1 h1

      div.row
        h2 h2

      div.row
        h3 h3

      div.row
        h4 h4

      div.row
        h5 h5

      div.row
        h6 h6

    div.row
      h3 Links
      
      div.row
        a link
      
</template>

<script>

export default {
  name: 'TypographyPage',
}
</script>

<style lang="stylus">
#typography-page
  display flex
  flex-wrap wrap
  
  .header
    flex-basis 100%
    border-bottom solid 1px black
    margin-bottom 2em

  .body
    flex-basis 100%
    display flex
    flex-wrap wrap
    
    .row
      flex-basis 100%
      display flex
      flex-wrap wrap
      margin-bottom 10px


      .component-container
        display flex
        flex-wrap wrap
        padding 1em
        justify-content center

        .s-tag
          margin-top 10px
</style>
