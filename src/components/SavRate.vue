<template>
  <div class="sav-rate" @mouseleave="clearType">
     <ul class="rate-item">
       <li :class="['rate-list', {'is-check': opt.type}]"
           v-for="opt in starArr"
           @mouseenter="changeRateCol(opt.num)"
           @click="checkRate(opt.num)"
       >
         <sav-icon :icon="icon"></sav-icon>
       </li>
     </ul>
    <div class="rate-text">
      <span v-if="showtext">{{evaluateCont}}</span>
    </div>

  </div>
</template>
<script>
  import SavIcon from './SavIcon.vue'
  export default {
    components: {
      SavIcon
    },
    props: {
      stars: {
        type: Number,
        default: 5
      },
      evaluate: {
        type: [Object, Array],
        default: function () {
          let str = ['极差','失望','一般','满意','惊喜']
          return str
        }
      },
      icon: {
        type: String,
        default: 'fa-star'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showtext: {
        type: Boolean,
        default: true
      },
      value: {
        type: Number,
        default: 0
      }
    },
    data (){
      return {
        starArr: [],
        checkNum: '',
        isCheck: false,
        evaluateCont: ''
      }
    },
    created (){
      for(let i = 1; i <= this.stars; i++){
        if(i <= this.value){
          this.starArr.push({'num': i, 'type': true})
        }else{
          this.starArr.push({'num': i, 'type': false})
        }
      }
      console.log(this.value)
    },
    watch: {
      checkNum (newValue){
        if(newValue !== 0){
          this.evaluateCont = this.evaluate[newValue - 1]
        }
      }
    },
    methods: {
      changeRateCol (it){
        if(this.disabled) return
        this.evaluateCont = this.evaluate[it - 1]
        this.isCheck = false
        this.starArr.map((value, index) => {
          if(value.num <= it){
            value.type = true
          }else{
            value.type = false
          }
        })
      },
      clearType (){
        if(this.disabled) return
        this.starArr.map((value, index) => {
          if(value.num > this.checkNum){
            value.type = false
          }else{
            value.type = true
          }
        })
        this.evaluateCont = this.evaluate[this.checkNum - 1]
      },
      checkRate (res){
        if(this.disabled) return
        this.starArr.map((value, index) => {
          if(value.num <= res){
            value.type = true
          }
        })
        this.checkNum = res
        this.isCheck = true
        this.$emit('input', this.checkNum)
        this.$emit('onchange', this.evaluateCont)
      }
    }
  }
</script>
