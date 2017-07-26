<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>

    <sav-input :color="color" :size="size" type="text"></sav-input>
    <sav-input :color="color" :size="size" placeholder="姓名" disabled ></sav-input>
    <sav-input :color="color" :size="size" type="password"></sav-input>
  </div>

</template>
<script>
  export default {
    data (){
      return {
        color: false,
        size: false
      }
    }
  }
</script>
