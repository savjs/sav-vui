<template>
  <div>
    <sav-text :placeholder="cont" :rows="2" :cols="50" ></sav-text>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        cont: '说点什么吧'
      }
    }
  }
</script>
