<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
      <sav-select v-model="value" :options="options"></sav-select>
    </div>

    <sav-btn :color="color" :size="size">一般按钮</sav-btn>
    <sav-btn :color="color" :size="size" :disabled="true">一般按钮</sav-btn>
    <sav-btn :color="color" :size="size" :loading="true">加载中</sav-btn>
    <sav-btn :color="color" :size="size" :to="url">Link</sav-btn>
    <sav-btn :color="color" :size="size"><sav-icon :icon="value"></sav-icon> Book</sav-btn>
  </div>
  
</template>
<script>
  export default {
    data (){
      return {
        color: false,
        size: false,
        url: '/',
        value: '',
        options: [
          {text: '字体', value: false},
          {text: 'fa-book', value: 'fa-book'},
          {text: 'fa-tags', value: 'fa-tags'},
          {text: 'fa-bookmark', value: 'fa-bookmark'}
        ]
      }
    }
  }
</script>
