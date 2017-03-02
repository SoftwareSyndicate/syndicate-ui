<template lang="pug">
  div.s-button
    span {{title}}
</template>

<script>
export default {
  name: 's-button',
  props: {
    title: {
      type: String,
      default: "title"
    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>
