<template>
  <div>
    <div class="as-control">

    </div>
    <div class="as-preview">
      <sav-modal
              title="禁用遮罩层关闭"
              v-model="modal1"
              :mask-closable="false"
      >
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
      </sav-modal>
      <sav-modal
              v-model="modal2"
              title="普通的Modal对话框标题"
              @on-ok="ok"
              @on-cancel="cancel"
      >
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
      </sav-modal>
      <sav-modal
              title="对话框标题"
              v-model="modal3"
              :closable="false"
      >
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
      </sav-modal>
      <sav-btn  @click.native="modal1 = true" >禁用遮罩层关闭</sav-btn>
      <sav-btn  @click.native="modal2 = true" >显示对话框</sav-btn>
      <sav-btn  @click.native="modal3 = true" >禁用右上角关闭（含Esc键）</sav-btn>

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        modal1: false,
        modal2: false,
        modal3: false
      }
    },
    methods: {
      ok () {
        alert('点击了确定')
      },
      cancel () {
        alert('点击了取消')
      }
    }
  }
</script>