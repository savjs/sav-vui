<template>
  <sav-row :col="2" class="doc-example">
    <sav-col>
      <div class="example-demo">      
        <div class="example-title">
          <span v-html="title"></span>
        </div>
        <div class="example-comment" v-if="comment">
          <span v-html="comment"></span>
        </div>
        <component class="example-component" :is="component"></component>
      </div>
    </sav-col>
    <sav-col>
      <example-code class="example-code" :content="content"></example-code>
    </sav-col>
  </sav-row>
</template>
<script>
  import ExampleCode from './ExampleCode.vue'
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      component: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      comment: {
        type: String,
        default: ''
      }
    },
    components: {
      ExampleCode
    }
  }
</script>
