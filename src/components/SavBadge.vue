<template>
    <span v-if="dot" class="sav-badge" ref="badge">
        <slot></slot>
        <sup class="as-badge-dot" v-show="badge"></sup>
    </span>
    <span v-else class="sav-badge" ref="badge">
        <slot></slot>
        <sup v-if="count" class="as-badge-count" v-show="badge">{{ finalCount }}</sup>
    </span>
</template>
<script>
  export default {
    props: {
      count: [Number, String],
      dot: {
        type: Boolean,
        default: false
      },
      overflowCount: {
        type: [Number, String],
        default: 99
      }
    },
    computed: {
      finalCount () {
        return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count
      },
      badge () {
        let status = false

        if (this.count) {
          status = !(parseInt(this.count) === 0)
        }

        if (this.dot) {
          status = true
          if (this.count) {
            if (parseInt(this.count) === 0) {
              status = false
            }
          }
        }

        return status
      },
      alone () {
        return this.$slots.default === undefined
      }
    }
  }
</script>
