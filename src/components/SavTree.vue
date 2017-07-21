<template>
  <div>
    <ul :class="['sav-tree', sizeModify]">   
      <component
        v-for="option in options"
        :is="nodeComponent"
        :option="option"
        :textField="textField"
        :value="value"
        :valueField="valueField"
        @change = "changeHandler"
        ></component>
    </ul>
  </div>
</template>

<component name="treenode">
  <li :class="['tree-node', {
          'is-active': option[valueField] == value,
          'is-open': open,
          'is-closed': closed,
          'has-sub': isFolder
        }]" @click.stop="toggle(option[valueField])" @mousemove.stop = "mousemoveHandler" @mouseleave.stop="mouseleaveHandler">
    <div :class="['tree-hold',{'is-hold-hover': isHover}]" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
    <a class="as-item" >{{option[textField]}}</a>
    <ul class="tree-child">
      <component
        v-for="opt in option[childrenField]"
        :is="nodeComponent"
        :option="opt"
        :value="value"
        :textField="textField"
        :valueField="valueField"
        @change = "changeHandler"
        ></component>
    </ul>
  </li>
</component>
<script>
  import {createMixins} from '../mixin.js'
  export default {
    mixins: createMixins(['value', 'size', 'options', 'textField', 'valueField']),
    props: {
      nodeComponent: {
        type: [String, Object],
        default: 'treenode'
      }
    },
    methods: {
      changeHandler (value) {
        this.value = value
        this.$emit('input', value)
      },
      hoverHandler () {

      }
    },
    components: {
      treenode: {
        mixins: createMixins(['value', 'option', 'textField', 'valueField']),
        props: {
          nodeComponent: {
            type: [String, Object],
            default: 'treenode'
          },
          childrenField: {
            type: String,
            default: 'children'
          }
        },
        data () {
          return {
            open: false,
            closed: true,
            isHover: false
          }
        },
        computed: {
          isFolder () {
            return this.option[this.childrenField] && this.option[this.childrenField].length
          }
        },
        created () {
        },
        methods: {
          toggle (newValue) {
            if (this.value !== newValue) {
              this.$emit('change', newValue)
            }

            if (this.isFolder) {
              this.open = !this.open
              this.closed = !this.closed
            }
          },
          changeHandler (value) {
            //this.value = value
            this.$emit('change', value)
          },
          mousemoveHandler (event) {
            this.isHover = true
          },
          mouseleaveHandler(){
            this.isHover = false
          }
        }
      }
    }
  }


 
</script>


