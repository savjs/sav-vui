<template>
  <div>
    <ul :class="['sav-tree', isSize]">
      <li class="tree-node">
        <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
        <a class="as-item">单个子节点</a>
      </li>
      <li class="tree-node is-open is-active has-sub">
        <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
        <a class="as-item">展开的子节点</a>
        <ul class="tree-child">
          <li class="tree-node">
            <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
            <a class="as-item">单个子节点</a>
          </li>
          <li class="tree-node">
            <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
            <a class="as-item">展开的子节点</a>
          </li>
        </ul>
      </li>
      <li class="tree-node is-closed has-sub">
        <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
        <a class="as-item">闭合的子节点</a>
        <ul class="tree-child">
          <li class="tree-node">
            <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
            <a class="as-item">单个子节点</a>
          </li>
          <li class="tree-node">
            <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
            <a class="as-item">展开的子节点</a>
          </li>
          <li class="tree-node is-closed has-sub">
            <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
            <a class="as-item">闭合的子节点</a>
            <ul class="tree-child">
              <li class="tree-node">
                <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
                <a class="as-item">单个子节点</a>
              </li>
              <li class="tree-node">
                <div class="tree-hold" unselectable="on">&nbsp;</div><i class="tree-toggle"></i>
                <a class="as-item">展开的子节点</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['model'],
    data () {
      return {
        open: false,
        isFolder: true
      }
    },
    computed: {
      isFolder () {
        return this.model.children && this.model.children.length
      }
    },
    created () {
      console.log(this.model)
    },
    methods: {
      toggle () {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    }
  }
</script>
