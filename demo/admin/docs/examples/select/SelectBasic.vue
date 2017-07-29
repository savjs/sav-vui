<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
      <sav-check v-model="fill">is-fill</sav-check>
    </div>
    <div>
      <sav-select v-model="value" :color="color" :size="size" :options="options" :fill="fill"></sav-select>
      <sav-select v-model="value" :color="color" :size="size" :options="options" :disabled="true"></sav-select>
      <sav-select v-model="value1" :color="color" :size="size" :options="options" :hover="true" placeholder="dropdown-select" :fill="fill" iconTag="pt-record"></sav-select>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        color: false,
        size: false,
        value: '',
        value1: '',
        fill: false,
        options: [
          {text: 'select-item1', value: 1},
          {text: 'select-item2', value: 2},
          {text: 'select-item3', value: 3}
        ]
      }
    }
  }
</script>