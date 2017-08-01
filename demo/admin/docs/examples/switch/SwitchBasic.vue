<template>
  <div>
    <div class="as-control">
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>
    <div class="as-preview">
      <sav-row class="doc-icons-preview" :col="6">
        <sav-col >
          <sav-switch :disabled="true" :size="size"></sav-switch>
        </sav-col>
        <sav-col>
          <sav-switch :size="size"></sav-switch>
        </sav-col>
      </sav-row>
    </div>


  </div>
</template>
<script>
  export default {
    data () {
      return {
        size: false
      }
    }
  }
</script>
