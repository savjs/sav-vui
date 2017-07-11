<template>
  <div>
    <div class="doc-sections">
      <span>Examples</span>
    </div>
    <example v-for="example in current.examples"
      :title="example.title"
      :component = "example.component"
      :content = "example.content"
      :comment = "example.comment"
      ></example>
    <div class="doc-sections">
      <span>API</span>
    </div>
    <div class="doc-apis">
      <sav-tab v-model="currentTab" :options="options" color="primary"
        :contentComponent="$options.components.apiContent"></sav-tab>
    </div>
  </div>
</template>

<component name="apiContent">
  <sav-table class='is-api-table' :columns="option.columns" :rows="option.rows"></sav-table>
</component>

<script>
  import Example from './Example.vue'
  export default {
    props: {
      api: {
        type: String,
        default: ''
      }
    },
    getters: {
      current (state) {
        return state[this.api] || {examples: []}
      }
    },
    computed: {
      options () {
        return [
          {text: 'props', value: 'prop', columns : [
            {text: '名称', value: 'name'},
            {text: '类型', value: 'type'},
            {text: '默认值', value: 'default'},
            {text: '说明', value: 'description'}
          ], rows: this.current.props || []},
          {text: 'slots', value: 'slot', columns: [
            {text: '名称', value: 'name'},
            {text: '说明', value: 'description'}
          ], rows: this.current.slots || []},
          {text: 'events', value: 'event', columns: [
            {text: '名称', value: 'name'},
            {text: '说明', value: 'description'}
          ], rows: this.current.events || []},
          {text: 'examples', value: 'example', columns: [
            {text: '标题', value: 'title'},
            {text: '组件', value: 'component'},
            {text: '文件', value: 'file'}
          ], rows: this.current.examples || []}
        ].filter((it, id) => id > 0 ? it.rows.length : true)
      }
    },
    data () {
      return {
        currentTab: 'prop'
      }
    },
    components: {
      Example,
      apiContent: {
        extends: 'SavTab.contentItem',
      }
    }
  }
</script>
