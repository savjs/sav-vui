<template>
  <div class="sav-flex-row sav-nav has-shadow">
    <div class="flex-left">
      <router-link class="nav-item" :to="{name: 'HomeIndex'}">
        <img src="imgs/logo.png">
      </router-link>
      <router-link class="nav-item is-tab is-secondary" :to="{name: 'HomeIndex'}" exact>Home</router-link>
      <router-link class="nav-item is-tab is-secondary" :to="{name: 'ElementIndex'}">Elements</router-link>
      <router-link class="nav-item is-tab is-secondary" :to="{name: 'LayoutIndex'}">Layouts</router-link>
    </div>
    <div class="flex-center"></div>
    <div class="flex-right">
      <div class="sav-form nav-item is-horizontal">
        <div class="sav-field is-body">
          <router-link class="field-item sav-btn is-success" :to="{name: 'PageLogin'}">Login</router-link>
          <router-link class="field-item sav-btn" :to="{name: 'PageRegister'}">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
