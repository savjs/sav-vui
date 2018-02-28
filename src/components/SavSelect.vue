<template>
  <sav-dropdown :open="innerOpen" :fill="fill"
    @mouseenter.native="disabled || hover && (innerOpen = true)"
    @mouseleave.native="disabled || (innerOpen = false)"
    >
    <sav-btn :class="[colorModify, sizeModify]" :disabled="disabled"
      @click.native.stop.prevent="innerOpen = !innerOpen">
      <span>{{textSelected || placeholder}}</span>
      <sav-icon icon="is-icon-caret"></sav-icon>
    </sav-btn>
    <ul class="is-drop-select" slot="dropview">
      <li v-for="opt in options" :key="valueField"
        @click="selectItem($event, opt);"
        :class="['as-item', {
          'is-active': opt[valueField] == value
        }]">
          <span>{{opt[textField]}}</span>
          <sav-icon :class="[colorModify]" icon="is-icon-right" v-if="opt[valueField] == value"></sav-icon>
        </li>
    </ul>
  </sav-dropdown>
</template>
<script>
  import SavBtn from './SavBtn.vue'
  import SavIcon from './SavIcon.vue'
  import SavDropdown from './SavDropdown.vue'
  import {createMixins} from '../mixin'
  export default {
    mixins: createMixins(['color', 'size', 'textField', 'valueField', 'options', 'value']),
    components: {
      SavBtn,
      SavIcon,
      SavDropdown
    },
    data () {
      return {
        innerOpen : false
      }
    },
    computed: {
      textSelected () {
        let text
        this.options.some((it) => {
          if (it[this.valueField] == this.value) {
            text = it[this.textField]
            return true
          }
        })
        return text
      }
    },
    props: {
      placeholder: {
        type: String,
        default: '请选择'
      },
      hover: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fill: {
        type: [Boolean, String],
        default: false
      }
    },
    methods: {
      selectItem ($event, item) {
        $event.preventDefault()
        this.innerOpen = false
        this.$emit('input', item[this.valueField])
        this.$emit('select', item)
      }
    }
  }
</script>
