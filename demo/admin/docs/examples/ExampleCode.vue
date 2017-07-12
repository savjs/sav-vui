<template>
  <div>
    <pre><code :class="lang" ref="code" v-text="content"></code></pre>
    <span class="copy-example" @click="clip">
      <sav-icon icon="fa-clipboard" v-show="!copied"></sav-icon>
      <sav-icon icon="is-icon-right" v-show="copied" :color="copied && 'success'"></sav-icon>
    </span>
  </div>
</template>
<script>
  // 使用 unpkg.com 的资源这里不用编译了
  // import hljs from 'highlightjs'
  // import Clipboard from 'clipboard'
  export default {
    props: {
      lang: {
        type: String,
        default: 'vue'
      },
      content: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        copied: false
      }
    },
    updated () {
      this.highlight() // @NOTE 会有效率问题, 目前也没好的方案
    },
    mounted () {
      this.highlight()
    },
    methods: {
      highlight () {
        hljs.highlightBlock(this.$refs.code)
      },
      clip () {
        const code = this.content
        const clipboard = new Clipboard('.copy-example', {
          text () {
            // return this.content // @NOTE 这里必须用个变量接一下, 直接写不行
            return code
          }
        })
        clipboard.on('success', (e) => {
            e.clearSelection()
            clipboard.destroy()
            this.copied = true
            setTimeout(() => { // @NOTE 貌似VM的refs也被复用了
              this.copied = false
            }, 2000)
        })
      }
    }
  }
</script>
