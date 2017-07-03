<template>
  <div class="page-component">
    <nav-header></nav-header>
    <router-view class="view-container"></router-view>
  </div>
</template>
<script>
  import NavHeader from '../common/NavHeader.vue'
  export default {
    name: 'Component',
    getters: [
    ],
    actions: [
    ],
    components: {
      NavHeader
    }
  }
</script>
