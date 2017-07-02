<template>
  <div class="home-index">
    <router-link :to="{name: 'PageLogin'}">登录页面</router-link>
    <router-link :to="{name: 'PageRegister'}">注册页面</router-link>
    <router-link :to="{name: 'LayoutTile'}">LayoutTile</router-link>
    <router-link :to="{name: 'ElementBtn'}">ElementBtn</router-link>
    <router-link :to="{name: 'ElementInput'}">ElementInput</router-link>
    <router-link :to="{name: 'ElementCheck'}">ElementCheck</router-link>
    <router-link :to="{name: 'ElementRadio'}">ElementRadio</router-link>
    <router-link :to="{name: 'ElementSelect'}">ElementSelect</router-link>
  </div>
</template>
<script>
  export default {
    name: 'HomeIndex',
    getters: [
    ],
    actions: [
    ]
  }
</script>
