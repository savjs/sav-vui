<template>
<div>
    <sav-datepicker :readonly="true" format="YYYY-MM-DD"></sav-datepicker>
    <sav-datepicker format="YYYY-M-D" value="2015-9-5"></sav-datepicker>
    <sav-datepicker :readonly="true" format="MMM/D/YYYY" width="300px" name="date"></sav-datepicker>
</div>
</template>

<script>

export default {
};
</script>