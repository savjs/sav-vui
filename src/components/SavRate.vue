<template>
  <div class="sav-rate">
     <ul class="rate-item">
       <li :class="['rate-list', {'is-check': opt.type}]"
           v-for="opt in starArr"
           @mouseenter="changeRateCol(opt.num)"
           @mouseleave="clearType"
           @click="checkRate(opt.num)"
       >
         <sav-icon :icon="icon"></sav-icon>
       </li>
     </ul>
    <span>{{evaluateCont}}</span>
  </div>
</template>
<script>
  import SavIcon from './SavIcon.vue'
  export default {
    components: {
      SavIcon
    },
    data (){
      return {
        starArr: [],
        checkNum: '',
        isCheck: false,
        evaluateCont: ''
      }
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
      }
    },
    watch: {
      checkNum (newValue){
        if(newValue !== 0){
          this.evaluateCont = this.evaluate[newValue - 1]
        }
      }
    },
    created (){
      for(let i = 1; i <= this.stars; i++){
        this.starArr.push({'num': i, 'type': false})
      }
    },
    methods: {
      changeRateCol (it){
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
        this.starArr.map((value, index) => {
          if(value.num <= res){
            value.type = true
          }
        })
        this.checkNum = res
        this.isCheck = true
        this.$emit('input', this.checkNum)
      }
    }
  }
</script>
