<template>
  <div>
    <div class="as-control">
      <sav-check v-model="float">浮动布局</sav-check>
      <sav-btn class="as-item" @click.native="count++">添加</sav-btn>
      <sav-btn class="as-item" @click.native="count--" :disabled="count<1">移除</sav-btn>
      <sav-col-modify v-model="colValue" :ensure="true" prefix="has"></sav-col-modify>
    </div>
    <div class="as-preview">
      <sav-row :float="float" :col="colValue">
        <sav-col v-for="n in count"><span>col-{{n}}</span></sav-col>
      </sav-row>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        count: 25,
        colValue: 6,
        float: false
      }
    }
  }
</script>
