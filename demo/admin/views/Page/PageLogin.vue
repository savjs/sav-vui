<template>
  <div class="page-login">
    <div class="sav-flex-block is-center">
      <form class="sav-form is-vertical">
        <label class="sav-field">
          <span class="sav-label">您的帐号</span>
            <div class="field-body">
              <input class="sav-input" type="text" v-model="username"/>
            </div>
        </label>
        <label class="sav-field">
          <span class="sav-label">您的密码</span>
            <div class="field-body">
              <input class="sav-input" type="password" v-model="username"/>
            </div>
        </label>
        <div class="sav-field">
          <label class="sav-label"></label>
          <div class="field-body">
            <button class="field-item sav-btn is-primary" @click="$router.back()">登录</button>
          </div>
        </div>
      </form>
    </div>
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
