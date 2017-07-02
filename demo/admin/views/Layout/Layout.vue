<template>
  <div class="layout">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import NavHeader from '../layouts/NavHeader.vue'
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
