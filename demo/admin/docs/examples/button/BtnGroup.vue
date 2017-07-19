<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>

    <sav-btn-group >
      <sav-btn  :color="color" :size="size" ><SavIcon icon="fa-github"></SavIcon>按钮</sav-btn>
      <sav-btn  :color="color" :size="size">一般按钮</sav-btn>
      <sav-btn  :color="color" :size="size" >一般按钮</sav-btn>
    </sav-btn-group>
    <sav-btn-group vertical>
      <sav-btn  :color="color" :size="size"><SavIcon icon="fa-github"></SavIcon>按钮</sav-btn>
      <sav-btn  :color="color" :size="size">一般按钮</sav-btn>
      <sav-btn  :color="color" :size="size">一般按钮</sav-btn>
    </sav-btn-group>
  </div>

</template>
<script>
  export default {
    data (){
      return {
        color: false,
        size: false,
        vertical: false
      }
    }
  }
</script>
BtnGroup