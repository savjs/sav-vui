<template>
  <div class="page-layout">
    <nav-header></nav-header>
    <router-view class="view-container"></router-view>
  </div>
</template>
<script>
  import NavHeader from '../common/NavHeader.vue'
  export default {
    name: 'Layout',
    getters: [
    ],
    actions: [
    ],
    components: {
      NavHeader
    }
  }
</script>
