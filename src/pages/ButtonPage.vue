<template lang="pug">
div#button-page
  div.header
    h1 Buttons

  div.body
    div.row-flex-wrap
      h3 Sizes
      div.component-container(v-for="size in sizes")
        span {{size ? size : 'default'}}
        s-button(title="button", :classes='[size]')

    div.row-flex-wrap
      h3 Themes
      div.component-container(v-for="theme in themes")
        span {{theme ? theme : 'default'}}
        s-button(title="button", :classes='[theme]')
          
</template>

<script>

export default {
  name: 'ButtonPage',
  data(){
    return {
      sizes: ['xs', 's', '', 'l', 'xl'],
      themes: ['', 'primary', 'positive', 'negative', 'warning'],
    }
  },
}
</script>

<style lang="stylus">
#button-page
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
    
    .row-flex-wrap
      margin-bottom 2em

      h3
        flex-basis 100%

      .component-container
        padding 1em
        text-align center

        .s-button
          margin-top 10px
    
</style>
