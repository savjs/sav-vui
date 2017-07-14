<template>
  <div>
    <div class="as-control">
      <sav-btn class="as-item" @click.native="count++" :disabled="count>16">添加({{17-count}})</sav-btn>
      <sav-btn class="as-item" @click.native="count--" :disabled="count<1">移除({{count}})</sav-btn>
      <sav-flex-modify v-model="flex"></sav-flex-modify>
    </div>
    <div class="as-preview">
      <sav-tile>
        <sav-tile :flex="flex" v-for="n in count">
          <span>tile</span>
          <span>{{n}}</span>
        </sav-tile>
      </sav-tile>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        count: 6,
        flex:''
      }
    }
  }
</script>
