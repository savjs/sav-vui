<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>
    <div class="as-preview">
      <sav-tab v-model="currentTab"
        :options="options"
        :color="color"
        :size="size"
        ></sav-tab>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        color: false,
        size: false,

        currentTab: 'prop',
        options: [
          {text: 'props', value: 'prop', content: '属性列表'},
          {text: 'slots', value: 'slot', content: '插槽列表'},
          {text: 'events', value: 'event', content: '事件列表'}
        ]
      }
    }
  }
</script>