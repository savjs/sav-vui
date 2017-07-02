<template>
  <div class="element-check">
    <div class="sav-container">
      <sav-tile vertical=true>
        <sav-tile>
          <sav-check v-model="c1">香蕉</sav-check>
          <sav-check v-model="c2">苹果</sav-check>
          <sav-check v-model="c3">西瓜</sav-check>
        </sav-tile>
        <sav-tile>
          <sav-check v-model="fruit" :option="1">香蕉</sav-check>
          <sav-check v-model="fruit" :option="2">苹果</sav-check>
          <sav-check v-model="fruit" :option="3">西瓜</sav-check>
        </sav-tile>
        <sav-tile>
          <sav-check-group color="primary" v-model="fruit" :options="options"></sav-check-group>
        </sav-tile>
      </sav-tile>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ElementCheck',
    getters: [
    ],
    actions: [
    ],
    data () {
      return {
        c1: false,
        c2: true,
        c3: false,
        fruit: [],
        options: [
          {text: '香蕉', value: 1},
          {text: '苹果', value: 2},
          {text: '西瓜', value: 3}
        ]
      }
    }
  }
</script>
