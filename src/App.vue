<template lang="pug">
div#app
  div.components
    div.component
      h1 Button
      h3 Sizes
      div.sizes(v-for="size in sizes")
        span.info {{size}}
        s-button(:classes="[size]")

      h3 Theme
      div.themes(v-for="theme in themes")
        span.info {{theme}}
        s-button(:classes="[theme]")

    div.component
      h1 Input
      h3 Sizes
      div.sizes(v-for="size in sizes")
        span.info {{size}}
        s-input(:classes="[size]")

      h3 States
      div.themes(v-for="state in states")
        span.info {{state}}
        s-input(:classes="[state]")

    div.component
      h1 TextArea
      h3 Sizes
      div.sizes(v-for="size in sizes")
        span.info {{size}}
        s-textarea(:classes="[size]")

      h3 Theme
      div.themes(v-for="theme in themes")
        span.info {{theme}}
        s-textarea(:classes="[theme]")


    div.component
      h1 Select
      s-select(:items="['item 1', 'item 2', 'item 3']")

</template>

<script>

import Button from './components/button.vue'
import Input from './components/input.vue'
import TextArea from './components/textarea.vue'
import Select from './components/select.vue'

export default {
  name: 'app',
  data() {
    return {
      sizes: ['sm', 'default', 'lg'],
      states: ['default', 'error', 'warning', 'good'],
      themes: ['default', 'primary', 'secondary', 'tertiary'],
    }
  },
  created:() => {

  },
  components: {
    's-button': Button,
    's-input': Input,
    's-textarea': TextArea,
    's-select': Select,
  }
}
</script>

<style lang="stylus">

  
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;


h1, h2, h3
  margin-top 0px
  margin-bottom 20px
  font-weight normal

.components
  display flex
  flex-wrap wrap

  .component
    display flex
    flex-wrap wrap
    flex-basis 100%
    margin-bottom 30px

    h1, h3
      flex-basis 100%

    .info
      flex-basis 100%

    .sizes
      display flex
      flex-wrap wrap
      text-align center
      margin-right 2em
      margin-bottom 10px
      
    .themes
      text-align center
      margin-right 2em
      margin-bottom 10px


</style>
