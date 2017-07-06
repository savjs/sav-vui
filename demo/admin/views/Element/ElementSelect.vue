<template>
  <div class="element-select">
    ElementSelect
    <sav-btn @click.native="toggleView">切换显示</sav-btn>
    <component :is="current" :text="'Hello Wrold'"></component>
    <sav-tab :navComponent="$options.components.myTabNav" v-model="currentTab" :options="options"></sav-tab>
  </div>
</template>

<component name="my-tab-nav">
  <a @click="changeValue(option.value)">
    <span>{{option.text}}</span>
    <span v-if="toggle">({{option.value}})</span>
  </a>
</component>

<component name="my-component">
  <div>
    <span>Custom Component Render</span>
    <span>{{text}}</span>
  </div>
</component>

<component name="my-component2">
  <div>
    <span>Custom Component Render2</span>
    <span>{{text}}</span>
  </div>
</component>

<script>
  export default {
    name: 'ElementSelect',
    getters: [
    ],
    actions: [
    ],
    data () {
      return {
        current: 'my-component',
        currentTab: 'prop',
        options: [
          {text: 'props', value: 'prop'},
          {text: 'slots', value: 'slot'},
          {text: 'events', value: 'event'}
        ]
      }
    },
    methods: {
      toggleView () {
        this.current = this.current === 'my-component' ? 'my-component2' : 'my-component'
      }
    },
    components: {
      'my-component': {
        props: {
          text: {
            type: String,
            default: '',
          }
        }
      },
      'my-component2': {
        props: {
          text: {
            type: String,
            default: '',
          }
        }
      },
      myTabNav: {
        extends: 'SavTab.navItem',
        data () {
          return {
            toggle: false
          }
        },
        methods: {
          changeValue (newValue) {
            if (this.value !== newValue) {
              this.$emit('change', newValue)
            }
            this.toggle = !this.toggle
          }
        }
      }
    }
  }
</script>
