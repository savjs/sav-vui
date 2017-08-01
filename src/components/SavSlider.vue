<template>
  <div class="sav-slider">
    <div class="slider-default" :style="{width: swidth}" @click="changeslider">
      <div class="slider-progress"></div>
      <div class="slider-boll" @mousedown="sliderPos"></div>
    </div>
    <div class="slider-prog-value">{{parcent}}</div>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        parcent: 0
      }
    },
    props: {
      swidth: {
        type: String,
        default: '400px'
      }
    },
    methods: {
      sliderPos (e){
        e.stopPropagation()
        e.preventDefault()
        let it = this
        window.addEventListener('mousemove', it.moveslider)
        window.addEventListener('mouseup', it.sliderup)
      },
      moveslider (e){
        e.preventDefault()
        let lf = document.getElementsByClassName('slider-boll')[0]
        let prog = document.getElementsByClassName('slider-progress')[0]
        let offsetW = lf.offsetWidth / 2
        let obj = prog.parentNode
        let ProgOffsetW = 0
        while (obj){
          if(obj.offsetLeft !== undefined)
            ProgOffsetW += obj.offsetLeft
          obj = obj.parentNode
        }
        let slideLeft = e.clientX - ProgOffsetW + offsetW
        let maxLeft = parseInt(this.swidth.replace(/px/g,''))
        if(slideLeft > 0 && slideLeft < maxLeft){
          lf.style.left = slideLeft + 'px'
          prog.style.width = slideLeft + 'px'
          this.parcent = Math.round(slideLeft / parseInt(maxLeft) * 100)
        }else if(slideLeft <= 0){
          slideLeft = 0
          lf.style.left = 0
          prog.style.width = 0
          this.parcent = 0
        }
        this.$emit('input', this.parcent)
      },
      sliderup (){
        let it = this
        window.removeEventListener('mousedown', it.sliderPos)
        window.removeEventListener('mousemove', it.moveslider)
      },
      changeslider (e){
        let checkPoint = e.clientX
        let slidePoint = document.getElementsByClassName('slider-boll')[0]
        let realProgress = document.getElementsByClassName('slider-progress')[0]
        let defaultProgress = document.getElementsByClassName('slider-default')[0]
        let parent = defaultProgress.parentNode
        let realWidth = parseInt(this.swidth.replace(/px/g,''))
        let allOffset = 0
        while(parent){
          if(parent.offsetLeft !== undefined)
            allOffset += parent.offsetLeft
          parent = parent.parentNode

        }
        let checkOffset = checkPoint - allOffset - slidePoint.offsetWidth / 2
        slidePoint.style.left = checkOffset + 'px'
        realProgress.style.width = checkOffset + 'px'
        this.parcent = Math.round(checkOffset / realWidth * 100)
        console.log(checkPoint - allOffset)
      }
    }
  }
</script>
