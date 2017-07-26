<template>
  <div :class="classes" v-if="show">
    <div class="modal-mask" @click="mask"></div>
    <div class="modal-card" :style="w">
      <a class="modal-close"  @click="close" v-if="closable"><sav-icon icon="is-icon-close"></sav-icon></a>
      <header class="modal-card-head" v-if="header">
        <slot name="header">
          <p class="modal-card-title">{{title}}</p>
        </slot>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot" v-if="footer">
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
  export default {
    components: {
      SavIcon,
      SavBtn
    },
    props: {
      title: {
        type: String,
        default: '提示框'
      },
      show: {
        type: Boolean,
        default: false
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
    watch: {
      show (val) {
        this.isShow = val
      }
    },
    data () {
      return {
        isShow: this.show
      }
    },
    mounted () {
      document.addEventListener('keydown', this.EscClose)
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.EscClose)
    },
    methods: {
      open () {
        this._show()
      },
      _show () {
        this.isShow = true
        this.$emit('show')
      },
      close () {
        this.isShow = false
        this.$emit('close')
      },
      ok () {
        this.isShow = false
        this.$emit('onok')
      },
      cancel () {
        this.close()
        this.$emit('oncancel')
      },
      mask () {
        this.close()
      },

      EscClose (e) {
        if (this.isShow) {
          if (e.keyCode === 27) {
            this.close()
          }
        }
      }
    },
    computed: {
      w () {
        return (this.width === null) ? '' : 'width:' + this.width + 'px;'
      },
      classes () {
        return ['modal', 'is-active']
      }
    }
  }
</script>