<template>
  <div>
    <div :class="['sav-pagination', sizeModify]" v-if="type=='FlipGroup'">
      <div :class="['page-list', {'borderRight': options[0].num === 1}]" @click="switchFlip('left')"><sav-icon icon="fa-angle-double-left"></sav-icon></div>
      <div class="page-list page-list-more" id="morePage" @click="showBeforePage" v-if="options[0].num !== 1"><span>...</span></div>
      <ul class="page-item">
        <li :class="['page-list', {'is-active': opt.type}]" v-for="opt in options" @click="checkNum(opt.num)"><a>{{opt.num}}</a></li>
      </ul>
      <div class="page-list page-list-more" @click="showAllPage" v-if="AllItem > limitPage && options[options.length-1].num < AllItem"><span>...</span></div>
      <div :class="['page-list', {'pageBorder': options[options.length - 1].num == AllItem}]" @click="switchFlip('next')"><sav-icon icon="fa-angle-double-right"></sav-icon></div>
    </div>

    <div :class="['sav-pagination', colorModify, sizeModify]" v-if="type=='SingleFlip'">
      <sav-btn :size="size" @click.native="flip > 1 ? flip-- : flip=1"><sav-icon icon="pt-left-open-big"></sav-icon>上一页</sav-btn>
      <sav-btn :size="size" @click.native="flip++">下一页<sav-icon icon="pt-right-open-big"></sav-icon></sav-btn>
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
      AllItem: {
        type: Number,
        default: 10
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
        active: false,
        limitPage: this.item
      }
    },
    watch: {
      options (newValue){
        this.options = newValue
      }
    },
    created (){
      for(let i = 1; i <= this.limitPage; i++){
        if(i === 1){
          this.options.push({'num':i,'type':true})
        }else{
          this.options.push({'num':i,'type':false})
        }
      }
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
        let lastValue = this.options[this.options.length-1].num
        this.options.map((res) => {
          if(res.type === true)
            tm = res.num
        })
        if(ty === 'next'){
          tm += 1
          if(tm > lastValue && tm <= this.AllItem){
            this.options.push({'num': tm, 'type': false})
            this.options.splice(0,1)
          }
          this.options.map((res) => {
            if(res.num === tm || tm >= this.AllItem && res.num === this.AllItem){
              res.type = true
              this.flip = res.num
            }else{
              res.type = false
            }
          })

        }else if(ty === 'left'){
          tm -= 1
          if(tm < this.options[0].num && tm > 0){
            this.options.unshift({'num': tm, 'type': false})
            this.options.pop()
          }
          this.options.map((res) => {
            if(res.num === tm || tm < 1 && res.num === 1){
              res.type = true
              this.flip = res.num
            }else{
              res.type = false
            }
          })
        }
      },
      showBeforePage (){
        let prev = this.options[0].num
        for(let i = --prev; i > 0; i--){
          this.options.unshift({'num': i, 'type': false})
        }
        this.limitPage = this.options.length
      },
      showAllPage (){
        let last = this.options[this.options.length-1].num
        for(let i = ++last; i <= this.AllItem; i++) {
          this.options.push({'num': i, 'type': false})
        }
        this.limitPage = this.options.length
      }
    }
  }
</script>
