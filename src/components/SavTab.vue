<template>
  <div :class="['sav-tab']">
    <div :class="['sav-tab-nav', colorModify, sizeModify, flexModify, typeModify]">
      <component
        v-for="option in options"
        :is="navComponent"
        :value="value"
        :option="option"
        :textField="textField"
        :valueField="valueField"
        :class="['as-item', {
          'is-active': option[valueField] == value
        }]"
        @change="changeTab"
        ></component>
    </div>
    <div class="sav-tab-body">
      <slot></slot>
    </div>
  </div>
</template>

<component name="navItem">
  <a @click.prevent="changeValue(option[valueField])">{{option[textField]}}</a>
</component>

<script>
  import {createMixins} from '../mixin.js'
  export default {
    mixins: createMixins(['color', 'size', 'flex', 'type', 'value', 'options', 'textField', 'valueField']),
    props: {
      navComponent: {
        type: [String, Object],
        default: 'navItem'
      }
    },
    methods: {
      changeTab (value) {
        this.$emit('input', value)
      }
    },
    components: {
      navItem: {
        mixins: createMixins(['value', 'option', 'textField', 'valueField']),
        methods: {
          changeValue (newValue) {
            if (this.value !== newValue) {
              this.$emit('change', newValue)
            }
          }
        }
      }
    }
  }
</script>
