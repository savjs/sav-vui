<template>
  <div class="page-register">
    <sav-form>
      <sav-field labelText="您的帐号">
        <input class="sav-input" v-focus type="text" v-model="username" />
      </sav-field>
      <sav-field labelText="您的昵称">
        <input class="sav-input" type="text" v-model="nickname" />
      </sav-field>
      <sav-field labelText="您的密码">
        <input class="sav-input" type="password" v-model="password" />
      </sav-field>
      <sav-field labelText="确认秘密">
        <input class="sav-input" type="password" v-model="confirmPassword" />
      </sav-field>
      <sav-field :isLabel="false">
        <button class="field-item sav-btn is-primary" @click="$router.back()">注册</button>
      </sav-field>
    </sav-form>
  </div>
</template>
<script>
  export default {
    name: 'PageRegister',
    getters: [
      'nickname',
      'username',
      'password',
      'confirmPassword',
    ],
    actions: [
    ]
  }
</script>
