<template lang="pug">
  div.s-button(@click="onClick()")
    span {{title}}
</template>

<script>
export default {
  name: 's-button',
  props: {
    title: {
      type: String,
      default: "button"
    }
  },
  created: () => {
    console.log(this.$style);
  },
  methods: {
    onClick: () => {
      window.navigator.vibrate(200);
    }
  }
}
</script>

<style lang="stylus">
  primary-color = #2c3e50;
  primary-background-color = #fff;

 .s-button
   cursor pointer
   display flex
   align-items center
   justify-content center
   width 102px
   height 38px
   border-radius 4px
   background-color #ffffff
   box-shadow inset 0 -2px 0 0 rgba(187, 193, 214, 0.4)
   border solid 1px #bcc1d7

   &:hover
     box-shadow none
     background-color darken(#fff, .5%)

   &:active
     background-color darken(#fff, 5%)
   
   &.primary
     color primary-color
     background-color primary-background-color
   
   span
     font-size 15px
 
 
  
    
  </style>
                                    
