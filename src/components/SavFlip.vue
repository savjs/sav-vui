<template>
  <div>
    <div :class="['sav-pagination', sizeModify]" v-if="type=='FlipGroup'">
      <ul class="u-item">
        <li class="item-list" @click="switchFlip('left')"><sav-icon icon="fa-angle-double-left"></sav-icon></li>
        <li :class="['item-list', {'is-active': opt.type}]" v-for="opt in options" @click="checkNum(opt.num)"><a>{{opt.num}}</a></li>
        <li class="item-list" @click="switchFlip('next')"><sav-icon icon="fa-angle-double-right"></sav-icon></li>
      </ul>
    </div>

    <div :class="['sav-pagination', colorModify, sizeModify]" v-if="type=='SingleFlip'">
      <sav-btn @click.native="flip > 1 ? flip-- : flip=1">上一页</sav-btn>
      <sav-btn @click.native="flip++">下一页</sav-btn>
    </div>

    <div class="page-cont">第{{flip}}页</div>
  </div>

</template>
<script>
  import {elements} from '../mixin.js'
  import SavIcon from './SavIcon.vue'
  import SavBtn from './SavBtn.vue'
  export default {
    mixins: elements,
    components: {
      SavIcon,
      SavBtn
    },
    props: {
      item: {
        type: Number,
        default: 5
      },
      type: {
        type: String,
        default: 'FlipGroup'
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
        if(ty === 'next'){
          tm += 1
          this.options.map((res) => {
            if(res.num === tm || tm > this.item && res.num === this.item){
              res.type = true
              this.flip = res.num
            }else{
              res.type = false
            }
          })
        }else if(ty === 'left'){
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
