<template>
  <div>
      <textarea :class="['sav-textarea']" :placeholder="placeholder" :cols="cols" rows="rows"></textarea>
  </div>
</template>
<script>
  export default {
    data (){
      return {

      }
    },
    props: {
      placeholder: {
        type: [String, Number],
        default: '请输入内容'
      },
      rows: {
        type: Number,
        default: 2
      },
      cols: {
        type: Number,
        default: 50
      }
    }
  }
</script>
