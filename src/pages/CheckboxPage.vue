<template lang="pug">
div#checkbox-page
  div.header
    h1 Checkbox

  div.body
    div.row
      h3 Sizes
      div.component-container(v-for="size in sizes")
        span {{size ? size : 'default'}}
        s-checkbox(title="button", :classes='[size]')
      h3 States
      div.component-container(v-for="state in states")
        span {{state ? state : 'default'}}
        s-checkbox(title="button", :classes='[state]') test
</template>

<script>

export default {
  name: 'CheckboxPage',
  data(){
    return {
      sizes: ['s', '', 'm'],
      states: ['', 'active', 'disabled'],
    }
  },
}
</script>

<style lang="stylus">
#checkbox-page
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
        padding 1em
        text-align center

        .s-checkbox
          margin-top 10px

</style>
