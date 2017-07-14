<template>
  <div>
    <div class="as-control">
      <sav-col-modify v-model="growValue" prefix="has-grow" text="标签宽度"></sav-col-modify>
      <sav-align-modify v-model="align"></sav-align-modify>
    </div>
    <div class="as-preview">
      <sav-form :grow="growValue" :align="align">
        <sav-field labelText="选项1">
          <input class="sav-input" type="text"/>
        </sav-field>
        <sav-field labelText="选项2">
          <input class="sav-input" type="password" />
        </sav-field>
      </sav-form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        align: 'center',
        growValue: 0
      }
    }
  }
</script>
