<template>
  <div>
    <sav-radio v-model="sex" option="1" color="primary">male</sav-radio>
    <sav-radio v-model="sex" option="2" color="primary">female</sav-radio>
    <sav-radio-group v-model="sex" :options="options" color="secondary"></sav-radio-group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        sex: 1,
        options: [
          {text: '男', value: 1},
          {text: '女', value: 2}
        ]
      }
    }
  }
</script>
