<template>
  <div>
    <div class="as-preview">
      <sav-check-group :vertical="true" v-model="value" :options="options" valueField="text"></sav-check-group>
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
        options: [
          {text: '香蕉', value: 1},
          {text: '苹果', value: 2},
          {text: '西瓜', value: 3}
        ]
      }
    }
  }
</script>
