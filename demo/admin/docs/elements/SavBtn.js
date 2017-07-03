export let SavBtn = {
  mixins: ['size', 'color', 'defaultSlot'],
  props: [
    {
      name: 'to',
      type: 'Boolean',
      default: false,
      description: `超链接`
    },
    {
      name: 'disabled',
      type:  'Boolean',
      default: false,
      description: `设置按钮为禁用状态`
    },
    {
      name: 'loading',
      type:  'Boolean',
      default: false,
      description: `设置按钮为加载中状态`
    },
    {
      name: 'icon',
      type:  'String',
      default: '',
      description: `设置按钮的图标类型`
    }
  ],
  examples: [
    {
      name: 'type',
      file: '@$examples/button/BtnModify.vue$@'
    }
  ]
}
