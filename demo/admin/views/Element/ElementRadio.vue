<template>
  <div class="element-radio">
    <sav-tile>
      <sav-tile>
        <sav-radio v-model="c1">一个</sav-radio>
      </sav-tile>
      <sav-tile>
        <sav-radio v-model="fruit" option="1">香蕉</sav-radio>
        <sav-radio v-model="fruit" option="2">苹果</sav-radio>
        <sav-radio v-model="fruit" option="3">西瓜</sav-radio>
      </sav-tile>
      <sav-tile>
        <sav-radio v-model="sex" option="1">male</sav-radio>
        <sav-radio v-model="sex" option="2">female</sav-radio>
      </sav-tile>
      <sav-tile>
        <sav-radio-group v-model="sex" :options="options"></sav-radio-group>
      </sav-tile>
    </sav-tile>
  </div>
</template>
<script>
  export default {
    name: 'ElementRadio',
    getters: [
    ],
    actions: [
    ],
    data () {
      return {
        c1: false,
        fruit: '1',
        sex: 1,
        options: [
          {text: '男', value: 1},
          {text: '女', value: 2}
        ]
      }
    }
  }
</script>
