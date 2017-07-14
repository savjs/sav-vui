<template>
  <div>
    <div class="as-preview">
      <sav-check-group :vertical="true" v-model="value" :options="options" tiny="true"></sav-check-group>
      <div>
        <span>fruits: {{value}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: [],
        options: ['香蕉', '苹果', '西瓜']
      }
    }
  }
</script>
