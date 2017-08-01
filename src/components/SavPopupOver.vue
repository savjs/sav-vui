<template>
  <span>
    <slot></slot>
    <div class="sav-poptip" ref="popper" v-show="isShow" :style="popperStyle" :class="{'popoverList':isPopover}">
        <div class="poptip-content">
            <div class="as-arrow" x-arrow></div>
            <div class="as-poptip-inner">
                <div class="as-title" v-if="title">{{ title }}</div>
                <div class="as-poptip-body">
                    <div class="as-body-content">
                        <slot name="content"><div v-text="content"></div></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </span>
</template>
<script>
    import PoptipMixin from '../mixins/PoptipMixin.js'
    export default {
        mixins: [PoptipMixin],
        props: {
            title: {
                type: String,
                default: '',
            },
            trigger: {
                type: String,
                default: 'click'
            },
            width: {
                type: Number
            }
        },

        data() {
            return {
                reference: null,
                popper: null,
                isShow: false,
                isPopover: false
            }
        },

        computed: {
            popperStyle() {
                if (this.width && this.width !== 276) {
                    return { width: `${this.width}px`, maxWidth: 'none' }
                }
                return null
            }
        },

        methods: {
           

        }
    }
</script>
