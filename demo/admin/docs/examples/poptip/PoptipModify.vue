<template>
  <div>
    <div class="as-control">

    </div>
    <div class="as-preview">
      <sav-poptip  trigger="hover" title="提示标题" content="提示内容">
        <sav-btn  >hover 激活</sav-btn>
      </sav-poptip>
      <sav-poptip placement="right" width="400"  trigger="hover" title="提示标题" content="提示内容222222222222222222222222222222222222222222222222222222222222222">
        <sav-btn  >hover 激活222222222222</sav-btn>
      </sav-poptip>
      <sav-poptip  title="提示标题" content="提示内容" placement="left">
        <sav-btn  >hover 激活</sav-btn>
      </sav-poptip>
      <sav-poptip  title="提示标题" content="提示内容" placement="leftBottom">
        <sav-btn  >左上</sav-btn>
      </sav-poptip>
      <sav-poptip  title="提示标题" content="提示内容" placement="left">
        <sav-btn  >左</sav-btn>
      </sav-poptip>
      <sav-poptip  title="提示标题" content="提示内容" placement="leftTop">
        <sav-btn  >左下</sav-btn>
      </sav-poptip>
      <sav-poptip  title="提示标题" content="提示内容" placement="rightBottom">
        <sav-btn  >右下</sav-btn>
      </sav-poptip>
      <sav-poptip  title="提示标题" content="提示内容" placement="right">
        <sav-btn  >右</sav-btn>
      </sav-poptip>
      <sav-poptip  title="提示标题" content="提示内容" placement="rightTop">
        <sav-btn  >右下</sav-btn>
      </sav-poptip>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>