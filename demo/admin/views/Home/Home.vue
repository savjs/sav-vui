<template>
  <div class="page-home">
    <nav-header></nav-header>
    <router-view class="view-container"></router-view>
  </div>
</template>
<script>
  import NavHeader from '../common/NavHeader.vue'
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
