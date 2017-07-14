<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
      <sav-check v-model="vertical">is-vertical</sav-check>
    </div>
    <div class="as-preview">
      <sav-radio v-model="sex" option="1" 
        :color="color" :size="size" :block="vertical">male</sav-radio>
      <sav-radio v-model="sex" option="2" 
        :color="color" :size="size" :block="vertical">female</sav-radio>
      <sav-radio-group v-model="sex" :options="options" :color="color" :size="size" :vertical="vertical"></sav-radio-group>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        color: false,
        size: false,
        vertical: false,
        sex: 1,
        options: [
          {text: '男', value: 1},
          {text: '女', value: 2}
        ]
      }
    }
  }
</script>
