<template lang="pug">
div#app
  ul
    li
      h1 Button
      s-button

      h1 Input
      s-input

      h1 TextArea
      s-textarea

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
      msg: 'Welcome to Your Vue.js App'
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


h1, h2 
  font-weight: normal;


ul 
  list-style-type: none;
  padding: 0;


li 
  display: inline-block;
  margin: 0 10px;


a 
  color: #42b983;

</style>
