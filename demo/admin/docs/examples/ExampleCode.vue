<template>
  <div>
    <pre><code :class="lang" ref="code"><slot></slot></code></pre>
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
        default: 'javascript'
      }
    },
    data () {
      return {
        code: '',
        copied: false
      }
    },
    mounted () {
      this.code = this.$refs.code.innerHTML.replace(/\n/, '');
      this.$refs.code.innerHTML = this.code;
      hljs.highlightBlock(this.$refs.code);
    },
    methods: {
      clip () {
        const code = this.code.replace(/&lt;/g,'<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
        const clipboard = new Clipboard('.copy-example', {
          text () {
            return code
          }
        })
        clipboard.on('success', (e) => {
            e.clearSelection()
            clipboard.destroy()
            this.copied = true
            setTimeout(() => {
                this.copied = false
            }, 2000)
        })
      }
    }
  }
</script>
