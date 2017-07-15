<template>
  <div>
    <div class="as-control">
      <sav-form align="left" horizontal="true">
        <sav-field labelText="搜索">
          <input class="sav-input" type="text" v-model="searchText"/>
        </sav-field>
      </sav-form>
    </div>
    <div class="as-preview">
      <sav-row class="doc-icons-preview">
        <sav-col v-for="icon in filterIcons">
          <sav-icon class="doc-icons-item"
            v-tip="icon"
            :icon="icon"
            @click.native="copy(icon)"></sav-icon>
        </sav-col>
      </sav-row>
    </div>
  </div>
</template>

<script>
  import {copy} from '../cliboard.js'
  export default {
    getters: [
      'fontawesome'
    ],
    data () {
      return {
        searchText: ''
      }
    },
    computed: {
      filterIcons () {
        if (this.searchText) {
          return this.fontawesome.filter((it) => it.indexOf(this.searchText) >=0)
        }
        return this.fontawesome
      }
    },
    methods: {
      copy
    }
  }
</script>
