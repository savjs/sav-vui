export let SavBtn = {
  shortName: '按钮',
  mixins: ['size', 'color', 'defaultSlot'],
  props: [
    {
      name: 'to',
      description: `超链接`
    },
    {
      name: 'disabled',
      description: `设置按钮为禁用状态`
    },
    {
      name: 'loading',
      type:  'Boolean',
      default: false,
      description: `设置按钮为加载中状态`
    }
  ],
  examples: [
    {
      name: 'BtnModify',
      title: '简单的按钮例子',
      comment: `...详细说明`,
      file: '@$examples/button/BtnModify.vue$@'
    }
  ]
}
