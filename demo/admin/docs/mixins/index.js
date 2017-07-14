const color = {
  props: [
    {
      name: 'color',
      description: `颜色选项 可选值为 [primary, secondary, success, warn, info, error]`
    }
  ]
}

const size = {
  props: [
    {
      name: 'size',
      description: `尺寸选项 可选值为 [small, large]`
    }
  ]
}

const defaultSlot = {
  slots: [
    {
      name: 'default',
      description: '默认插槽'
    }
  ]
}

export {color, size, defaultSlot}
