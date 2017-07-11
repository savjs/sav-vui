<template>
  <div>
    <div class="as-control">
      <sav-check v-model="float">行浮动</sav-check>
    </div>
    <div class="as-preview">
      <sav-row :float="float" v-for="x in gridSize">
        <sav-col :col="x"><span>is-{{x}}</span></sav-col>
        <sav-col :col="gridSize - x" v-if="x!=gridSize"><span>is-{{gridSize-x}}</span></sav-col>
      </sav-row>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        gridSize: 12,
        float: false
      }
    }
  }
</script>
