<template>
  <div class="page-login">
    <sav-form>
      <sav-field labelText="您的帐号">
        <input class="sav-input" v-focus type="text" v-model="username" />
      </sav-field>
      <sav-field labelText="您的密码">
        <input class="sav-input" type="password" v-model="password" />
      </sav-field>
      <sav-field :isLabel="false">
        <button class="field-item sav-btn is-primary" @click="$router.back()">登录</button>
      </sav-field>
    </sav-form>
  </div>
</template>
<script>
  export default {
    name: 'PageLogin',
    getters: [
      'username',
      'password',
    ],
    actions: [
    ]
  }
</script>
