<template lang="pug">
div#textarea-page
  div.header
    h1 TextArea

  div.body
    div.row
      h3 Sizes
      div.component-container(v-for="size in sizes")
        span {{size ? size : 'default'}}
        s-textarea(title="button", :classes='[size]')

    div.row
      h3 Themes
      div.component-container(v-for="theme in themes")
        span {{theme ? theme : 'default'}}
        s-textarea(title="button", :classes='[theme]')
  
</template>

<script>

export default {
  name: 'TextAreaPage',
  data(){
    return {
      sizes: ['xs', 's', '', 'l', 'xl'],
      themes: ['', 'primary', 'positive', 'negative', 'warning'],
    }
  }
}
</script>

<style lang="stylus">
#textarea-page
  padding 1em
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
      margin-bottom 2em

      h3
        flex-basis 100%

      .component-container
        display flex
        flex-wrap wrap
        padding 1em
        justify-content center

        .s-textarea
          margin-top 10px
</style>
