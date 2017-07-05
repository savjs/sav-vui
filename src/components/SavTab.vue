<template>
  <div :class="['sav-tab']">
    <div v-for="option in options"
      :class="['sav-tab-nav', colorModify, sizeModify, flexModify, typeModify]">
      <component
        :is="nav" 
        :tab-value="value"
        :tab-option="option"
        @change="changeTab"
        ></component>
    </div>
    <div class="sav-tab-container">
      <slot></slot>
    </div>
    <tab-nav-template inline-template>
      <a :class="['as-item', {
        'is-active': tabOption[textField] == tabValue
      }]" @click.prevent="changeValue(tabOption[valueField])">{{tabOption[textField]}}</a>
    </tab-nav-template>
  </div>
</template>
<component name="tabNavTemplate">
  <div class="xxx"></div>
</component>
<script>
  import color from '../mixins/color.js'
  import size from '../mixins/size.js'
  import flex from '../mixins/flex.js'
  import type from '../mixins/type.js'
  import option from '../mixins/option.js'
  export default {
    mixins: [color, size, flex, type, option],
    props: {
      navComponent: {
        type: [String, Object],
        default: 'tabNavTemplate'
      }
    },
    methods: {
      changeTab (value) {
        this.$emit('input', value)
      }
    },
    created () {
      console.log(this)
    },
    components: {
      tabNavTemplate: {
        props: {
          tabValue: {
            default: String
          },
          tabOption: {
            default: Object
          }
        },
        methods: {
          changeValue (newValue) {
            if (this.tabValue !== newValue) {
              this.$emit('change', newValue)
            }
          }
        }
      }
    }
  }
</script>
