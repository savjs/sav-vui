<template>
  <div class="sav-modal is-active" v-show="visible">
    <div class="as-mask" @click="mask" v-show="visible"></div>
    <div class="as-card" :style="savModalW">
      <a class="as-close"  @click="close" v-if="closable"><sav-icon icon="is-icon-close"></sav-icon></a>
      <header class="as-header" v-if="header">
        <slot name="header">
          <p class="as-header-title">{{title}}</p>
        </slot>
      </header>
      <section class="as-body">
        <slot></slot>
      </section>
      <footer  v-if="footer" :class="['sav-flex-block as-footer', alignModify]">
        <slot name="footer">
          <sav-btn  @click.native ="ok" class="is-success">{{okText}}</sav-btn>
          <sav-btn @click.native="cancel">{{cancelText}}</sav-btn>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
  import SavIcon from './SavIcon.vue'
  import SavBtn from './SavBtn.vue'
  import {createMixins} from '../mixin'
  import {getScrollBarSize} from '../utils/util.js'
  export default {
    mixins: createMixins(['align']),
    components: {
      SavIcon,
      SavBtn
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '提示框'
      },
      footer: {
        type: Boolean,
        default: true
      },
      header: {
        type: Boolean,
        default: true
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      width: {
        type: Number,
        default: 500
      },
      scrollable: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        wrapShow: false,
        visible: this.value
      }
    },

    beforeDestroy () {
      document.removeEventListener('keydown', this.escClose)
    },
    methods: {
      close () {
        this.visible = false
        this.$emit('input', false)
        this.$emit('on-cancel')
      },
      ok () {
        this.visible = false
        this.$emit('input', false)
        this.$emit('on-ok')
      },
      cancel () {
        this.close()
      },
      mask () {
        if (this.maskClosable) {
          this.close()
        }
      },
      escClose (e) {
        if (this.visible && this.closable) {
          if (e.keyCode === 27) {
            this.close()
          }
        }
      },
      checkScrollBar () {
        let fullWindowWidth = window.innerWidth
        if (!fullWindowWidth) {
          const documentElementRect = document.documentElement.getBoundingClientRect()
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
        if (this.bodyIsOverflowing) {
          this.scrollBarWidth = getScrollBarSize()
        }
      },
      setScrollBar () {
        if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
          document.body.style.paddingRight = `${this.scrollBarWidth}px`
        }
      },
      resetScrollBar () {
        document.body.style.paddingRight = ''
      },
      addScrollEffect () {
        this.checkScrollBar()
        this.setScrollBar()
        document.body.style.overflow = 'hidden'
      },
      removeScrollEffect() {
        document.body.style.overflow = ''
        this.resetScrollBar()
      }
    },
    computed: {
      savModalW () {
        return (this.width === null) ? '' : 'width:' + this.width + 'px;'
      }
    },
    mounted () {
      if (this.visible) {
        this.wrapShow = true
      }
      // ESC close
      document.addEventListener('keydown', this.escClose)
    },
    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        if (val === false) {
          this.timer = setTimeout(() => {
            this.wrapShow = false
          this.removeScrollEffect()
        }, 300)
        } else {
          if (this.timer) clearTimeout(this.timer)
          this.wrapShow = true
          if (!this.scrollable) {
            this.addScrollEffect()
          }
        }
      },
      scrollable (val) {
        if (!val) {
          this.addScrollEffect()
        } else {
          this.removeScrollEffect()
        }
      }
    }
  }
</script>