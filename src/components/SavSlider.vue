<template>
  <div class="sav-slider">
    <div class="slider-default" :style="{width: swidth}">
      <div class="slider-progress"></div>
      <div class="slider-boll" @mouseenter="sliderPos"></div>
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
        document.onmousedown = function () {
          document.onmousemove = function (e) {
            e.preventDefault()
            let slideLeft = e.clientX - ProgOffsetW + offsetW
            let maxLeft = parseInt(it.swidth.replace(/px/g,''))
            if(slideLeft > 0 && slideLeft < maxLeft){
              lf.style.left = slideLeft + 'px'
              prog.style.width = slideLeft + 'px'
              it.parcent = Math.round(slideLeft / parseInt(maxLeft) * 100)
            }else if(slideLeft <= 0){
              slideLeft = 0
              lf.style.left = 0
              prog.style.width = 0
              it.parcent = 0
            }
          }
          document.onmouseup = function () {
            document.onmousemove = null
            document.onmousedown = null
          }
        }

      }
    }
  }
</script>
