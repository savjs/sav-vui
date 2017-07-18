<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>
    <div>
      <sav-select v-model="value" :options="options"></sav-select>
    </div>
  </div>
</template>
<script>
  export default{
    data (){
      return {
        color: false,
        size: false,
        value: 2,
        options: [
          {text: '数学', value: 1},
          {text: '语文', value: 2},
          {text: '英语', value: 3}
        ]
      }
    }
  }
</script>