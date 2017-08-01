<template>
<div>
<div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>

    <sav-datepicker :readonly="true" format="YYYY-MM-DD" :size="size"></sav-datepicker>
    <sav-datepicker format="YYYY-M-D" value="2015-9-5" :size="size"></sav-datepicker>
    <sav-datepicker :readonly="true" format="MMM/D/YYYY" width="300px" name="date" :size="size"></sav-datepicker>
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
};
</script>