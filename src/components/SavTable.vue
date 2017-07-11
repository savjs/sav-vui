<template>
  <table class="sav-table">
    <thead>
      <tr>
        <component
          :is="columnComponent"
          v-for="option in columns"
          :option="option"
          :textField="textField"
          :valueField="valueField"
        ></component>
      </tr>
    </thead>
    <tbody>
      <slot>
        <tr v-for="entry in rows">
          <component
            v-for="option in columns"
            :is="option[componentField] || contentComponent"
            :option="option"
            :entry="entry"
            :valueField="valueField"
            ></component>
        </tr>
      </slot>
    </tbody>
  </table>
</template>

<component name="columnItem">
  <th>{{option[textField]}}</th>
</component>

<component name="contentItem">
  <td>{{entry[option[valueField]]}}</td>
</component>

<script>
  import {createMixins} from '../mixin.js'
  export default {
    mixins: createMixins(['size', 'textField', 'valueField']),
    props: {
      columns: {
        type: Array,
        default: Array
      },
      rows: {
        type: Array,
        default: Array
      },
      columnComponent: {
        type: [String, Object],
        default: 'columnItem'
      },
      contentComponent: {
        type: [String, Object],
        default: 'contentItem'
      },
      componentField: {
        type: String,
        default: 'component'
      }
    },
    components: {
      columnItem: {
        mixins: createMixins(['option', 'textField', 'valueField'])
      },
      contentItem: {
        mixins: createMixins(['option', 'valueField']),
        props: ['entry']
      }
    }
  }
</script>
