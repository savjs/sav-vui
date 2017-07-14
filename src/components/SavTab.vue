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
    <div class="sav-tab-contents">
      <component
        v-for="option in options"
        :is="contentComponent"
        :key="option[valueField]"
        :option="option"
        :contentField="contentField"
        :class="['as-item', {
          'is-active': option[valueField] == value
        }]"
        v-show="option[valueField] == value"
        ></component>
    </div>
  </div>
</template>

<component name="navItem">
  <a @click.prevent="changeValue(option[valueField])">{{option[textField]}}</a>
</component>

<component name="contentItem">
  <div>{{option[contentField]}}</div>
</component>

<script>
  import {createMixins} from '../mixin.js'
  export default {
    mixins: createMixins(['color', 'size', 'flex', 'type', 'value', 'options', 'textField', 'valueField']),
    props: {
      navComponent: {
        type: [String, Object],
        default: 'navItem'
      },
      contentComponent: {
        type: [String, Object],
        default: 'contentItem'
      },
      contentField: {
        type: String,
        default: 'content'
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
      },
      contentItem: {
        mixins: createMixins(['option']),
        props: ['contentField']
      }
    }
  }
</script>
