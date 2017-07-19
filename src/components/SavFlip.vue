<template>
  <div>
    <div :class="['sav-pagination', colorModify, sizeModify]">
      <ul class="u-item">
        <li class="item-list" @click="switchFlip(0)"><sav-icon icon="fa-angle-double-left"></sav-icon></li>
        <li :class="['item-list', {'is-active': opt.type}]" v-for="opt in options" @click="checkNum(opt.num)"><a>{{opt.num}}</a></li>
        <li class="item-list" @click="switchFlip(1)"><sav-icon icon="fa-angle-double-right"></sav-icon></li>
      </ul>
    </div>
    <div>第{{flip}}页</div>
  </div>

</template>
<script>
  import {elements} from '../mixin.js'
  import SavIcon from './SavIcon.vue'
  export default {
    mixins: elements,
    components: {
      SavIcon
    },
    props: {
      item: {
        type: Number,
        default: 5
      }
    },
    data (){
      return {
        options: [],
        flip: 1,
        active: false
      }
    },
    created (){
      for(let i = 1; i <= this.item; i++){
        if(i === 1){
          this.options.push({'num':i,'type':true})
        }else{
          this.options.push({'num':i,'type':false})
        }
      }
      console.log(this.options, 121)
    },
    methods: {
      checkNum (it){
        this.options.map((key) => {
          if(key.num === it){
            key.type = true
            this.flip = it
          }else{
            key.type = false
          }
        })
      },
      switchFlip (ty){
        let tm = 0
        this.options.map((res) => {
          if(res.type === true)
            tm = +res.num
        })
        if(ty === 1){
          tm += 1
          this.options.map((res) => {
            if(res.num === tm || tm > this.item && res.num === this.item){
              res.type = true
              this.flip = res.num
            }else{
              res.type = false
            }
          })
        }else if(ty === 0){
          tm -= 1
          this.options.map((res) => {
            if(res.num === tm || tm < 1 && res.num === 1){
              res.type = true
              this.flip = res.num
            }else{
              res.type = false
            }
          })
        }

      }
    }
  }
</script>
