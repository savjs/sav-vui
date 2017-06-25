<template>
  <label v-if="isLabel" class="sav-field">
    <slot name="title">
      <span class="sav-label">{{labelText}}</span>
    </slot>
    <div class="field-body"><slot></slot></div>
  </label>
  <div v-else class="sav-field">
    <slot name="title">
      <span class="sav-label">{{labelText}}</span>
    </slot>
    <div class="field-body"><slot></slot></div>
  </div>
</template>
<script>
  export default {
    props: {
      isLabel: {
        type: Boolean,
        default: true
      },
      labelText: {
        type: String,
        default: ''
      }
    }
  }
</script>
