<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import NavHeader from '../layouts/NavHeader.vue'
  export default {
    name: 'Home',
    getters: [
    ],
    actions: [
    ],
    components: {
      NavHeader
    }
  }
</script>
