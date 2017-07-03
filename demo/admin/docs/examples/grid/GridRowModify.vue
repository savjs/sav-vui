<template>
  <div>
    <div class="sav-row">
      <div class="sav-col" v-for="n in count">No.{{n}}</div>
    </div>
    <div class="sav-flex-block">
      <sav-btn class="as-item" @click.native="count++">AddCol</sav-btn>
      <sav-col-modify v-model="colValue"></sav-col-modify>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        count: 0,
        colValue: 0
      }
    }
  }
</script>
