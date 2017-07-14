<template>
  <div>
    <div class="as-preview">
      <sav-tab 
        v-model="currentTab"
        :navComponent="$options.components.myTabNav" 
        :options="options"></sav-tab>
    </div>
  </div>
</template>

<component name="my-tab-nav">
  <a @click="changeValue(option.value)">
    <span>{{option.text}}</span>
    <span>({{num}})</span>
  </a>
</component>

<script>
  export default {
    data () {
      return {
        currentTab: 'prop',
        options: [
          {text: 'props', value: 'prop', content: '属性列表'},
          {text: 'slots', value: 'slot', content: '插槽列表'},
          {text: 'events', value: 'event', content: '事件列表'}
        ]
      }
    },
    components: {
      myTabNav: {
        extends: 'SavTab.navItem',
        data () {
          return {
            num: 0
          }
        },
        methods: {
          changeValue (newValue) {
            if (this.value !== newValue) {
              this.$emit('change', newValue)
            }
            this.num++
          }
        }
      }
    }
  }
</script>