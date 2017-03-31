<template lang="pug">
div#select-page
  div.header
    h1 Select

  div.body
    div.row
      h3 Sizes
      div.component-container(v-for="size in sizes")
        span {{size ? size : 'default'}}
        s-select(:classes='[size]', :items="items")

    div.row
      h3 Themes
      div.component-container(v-for="theme in themes")
        span {{theme ? theme : 'default'}}
        s-select(:classes='[theme]', :items="items")
  
</template>

<script>

export default {
  name: 'SelectPage',
  data(){
    return {
      sizes: ['xs', 's', '', 'l', 'xl'],
      themes: ['', 'primary', 'positive', 'negative', 'warning'],
      items: ['item 1', 'item 2', 'another item']
    }
  }
}
</script>

<style lang="stylus">
#select-page
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

        .s-select
          margin-top 10px
</style>
