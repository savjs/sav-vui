<template>
  <div>
    <div class="as-preview">
      <div>
        <sav-btn data-tip="孔子曰: 有香蕉吃">香蕉</sav-btn>
        <sav-btn v-tip.top="appleText" @click.native="n++">苹果</sav-btn>
        <sav-btn v-tip.html.bottom="tipHtml">西瓜</sav-btn>
      </div>
      <br>
      <br>
      <div>
        <sav-check data-tip="这个不是Mac">又一个苹果</sav-check>
        <sav-check data-tip-html="吃西瓜不吐西瓜籽，不吃西瓜倒吐西瓜籽" data-tip-align="top" :disabled = "true">西瓜</sav-check>
        <sav-check data-tip="横看成冷侧成峰" data-tip-align="bottom">香蕉</sav-check>
        <sav-check data-tip="巴拉吃过没?" data-tip-align="left">巴拉</sav-check>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        n: 0,
        tipHtml: '别吃了,往下看<br></br><br><br>吃<b> 大西瓜 </b>的群众看过来',
      }
    },
    computed: {
      appleText () {
        return this.n ? `苹果被咬了${this.n}口` : '苹果: 来咬我啊'
      }
    }
  }
</script>
