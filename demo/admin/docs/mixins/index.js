const color = {
  props: [
    {
      name: 'color',
      type: 'String',
      default: '',
      description: `颜色选项 可选值为 [primary, secondary, success, warn, info, error]`
    }
  ]
}

const size = {
  props: [
    {
      name: 'size',
      type: 'String',
      default: '',
      description: `尺寸选项 可选值为 [small, large]`
    }
  ]
}

const defaultSlot = {
  slots: [
    {
      name: 'default',
      comment: '内容'
    }
  ]
}

export {color, size, defaultSlot}
