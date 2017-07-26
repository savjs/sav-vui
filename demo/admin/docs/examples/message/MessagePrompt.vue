<template>
  <div>
    <sav-message :type="type" :opens="open" @change="changeType">通知消息</sav-message>
    <sav-btn @click.native="isOpen">成功</sav-btn>
    <sav-btn @click.native="isOpen1">失败</sav-btn>
    <sav-btn @click.native="isOpen2">提示</sav-btn>
    <sav-btn @click.native="isOpen3">警告</sav-btn>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        open: false,
        type: 'success'
      }
    },
    watch: {

    },
    methods: {
      isOpen (){
        this.open = true
        this.type = 'success'
      },
      isOpen1 (){
        this.open = true
        this.type = 'fail'
      },
      isOpen2 (){
        this.open = true
        this.type = 'info'
      },
      isOpen3 (){
        this.open = true
        this.type = 'notice'
      },
      changeType (text){
        this.open = text
      }
    }
  }
</script>
