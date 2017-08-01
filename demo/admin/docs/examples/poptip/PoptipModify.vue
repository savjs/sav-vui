<template>
  <div>
    <div class="as-control">

    </div>
    <div class="as-preview">
      <sav-popup-over  trigger="hover" title="提示标题" content="提示内容">
        <sav-btn>hover 激活</sav-btn>
      </sav-popup-over>
      <sav-popup-over placement="right"   trigger="hover" title="提示标题" content="提示内容">
        <sav-btn>hover 激活222222222222</sav-btn>
      </sav-popup-over>
      <sav-popup-over  placement="left" title="提示标题" content="提示内容">
        <sav-btn>激活</sav-btn>
      </sav-popup-over>
      <sav-popup-over  title="提示标题" content="提示内容" placement="leftBottom">
        <sav-btn>左上</sav-btn>
      </sav-popup-over>
      <sav-popup-over  title="提示标题" content="提示内容" placement="left">
        <sav-btn>左</sav-btn>
      </sav-popup-over>
      <sav-popup-over  title="提示标题" content="提示内容" placement="leftTop">
        <sav-btn>左下</sav-btn>
      </sav-popup-over>
      <sav-popup-over  title="提示标题" content="提示内容" placement="rightBottom">
        <sav-btn>右下</sav-btn>
      </sav-popup-over>
      <sav-popup-over  title="提示标题" content="提示内容" placement="right">
        <sav-btn>右</sav-btn>
      </sav-popup-over>
      <sav-popup-over  title="提示标题" content="提示内容" placement="rightTop">
        <sav-btn>右下</sav-btn>
      </sav-popup-over>

    </div>
  </div>
</template>
<script>
  export default {

  }
</script>