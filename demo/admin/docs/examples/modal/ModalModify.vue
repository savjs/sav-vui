<template>
  <div>
    <div class="as-control">

    </div>
    <div class="as-preview">

      <sav-modal
        @close="close()"
        v-show="isShowModal"
      >444</sav-modal>
      <sav-btn  @click="ShowModal">一般按钮</sav-btn>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        modal3: false,
        isShowModal: false
      }
    },
    methods: {
      ShowModal (){
        this.isShowModal = true
      }
    }
  }
</script>