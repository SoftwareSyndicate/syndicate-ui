<template lang="pug">
div#app
  img(src="./assets/logo.png")
  ul
    li
      h1
        s-button
          width 102px
          height 38px
          border-radius 4px
          background-color #ffffff
          box-shadow inset 0 -2px 0 0 rgba(187, 193, 214, 0.4)
          border solid 1px #bcc1d7

</template>

<script>
import Button from './components/button.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function(){
    console.log(this);
  },
  components: {
    's-button': Button
  }
}
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


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
