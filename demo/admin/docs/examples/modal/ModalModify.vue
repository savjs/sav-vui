<template>
  <div>
    <div class="as-control">

    </div>
    <div class="as-preview">
      <sav-modal
        :show="isShowModal"
        @close="close(true)"
      >
        对话框内容 </br>
        对话框内容 </br>
        对话框内容 </br>
      </sav-modal>
      <sav-btn  @click.native="ShowModal">一般按111钮</sav-btn>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isShowModal: false
      }
    },
    methods:{
      ShowModal () {
        this.isShowModal = true
      },
      close(){
        this.isShowModal = false
      }
    }
  }
</script>