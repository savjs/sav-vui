<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>
    <div class="as-preview">
      <sav-check v-model="c1" :color="color" :size="size" data-tip="这个不是Mac">苹果[{{c1}}]</sav-check>
      <sav-check v-model="c2" :color="color" :size="size" data-tip="吃西瓜不吐西瓜籽，不吃西瓜倒吐西瓜籽" data-tip-align="top" :disabled = "true">西瓜[{{c2}}]</sav-check>
      <sav-check v-model="c3" :color="color" :size="size" data-tip="横看成冷侧成峰" data-tip-align="bottom">香蕉[{{c3}}]</sav-check>
      <sav-check v-model="c4" :color="color" :size="size"data-tip="巴拉吃过没?" data-tip-align="left">巴拉[{{c4}}]</sav-check>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        color: false,
        size: false,
        c1: false,
        c2: true,
        c3: false,
        c4: true,
      }
    }
  }
</script>
