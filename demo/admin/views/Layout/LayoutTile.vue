<template>
  <div class="layout-tile">
    <section class="sav-section">
      <div class="sav-container">
        <sav-tile>
          <sav-tile flex=false>Tile</sav-tile>
          <sav-tile flex="center" col=8>Tile</sav-tile>
          <sav-tile flex="right">Tile</sav-tile>
        </sav-tile>
        <sav-tile>
          <sav-col-modify v-model="col"></sav-col-modify>
          <sav-size-modify v-model="size"></sav-size-modify>
          <sav-color-modify v-model="color"></sav-color-modify>
          <sav-flex-modify v-model="flex"></sav-flex-modify>
        </sav-tile>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'LayoutTile',
    getters: [
    ],
    actions: [
    ],
    data () {
      return {
        col: 0,
        size: '',
        color: '',
        flex:''
      }
    }
  }
</script>
