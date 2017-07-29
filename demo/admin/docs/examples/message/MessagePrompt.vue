<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
    </div>
    <div>
      <sav-message :type="type" :opens="open" :color="color" @change="changeType">通知消息 </sav-message>
      <sav-btn @click.native="isOpen">成功</sav-btn>
      <sav-btn @click.native="isOpen1">失败</sav-btn>
      <sav-btn @click.native="isOpen2">提示</sav-btn>
      <sav-btn @click.native="isOpen3">警告</sav-btn>
      <sav-btn @click.native="isOpen4">默认提示</sav-btn>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        open: false,
        type: 'success',
        color: false
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
        this.type = 'error'
      },
      isOpen2 (){
        this.open = true
        this.type = 'info'
      },
      isOpen3 (){
        this.open = true
        this.type = 'warn'
      },
      isOpen4 (){
        this.open = true
        this.type = 'default'
      },
      changeType (text){
        this.open = text
      }
    }
  }
</script>
