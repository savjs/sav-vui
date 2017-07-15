export let SavTip = {
  shortName: '提示',
  directives: [
    {
      name: 'html',
      description: `是否展示为html内容`
    },
    {
      name: 'left',
      description: `弹出到左边`
    }
  ],
  examples: [
    {
      name: 'TipDirective',
      title: `tooltip指令`,
      comment: `哦, 还是有点必要的`,
      file: '@$examples/tip/TipDirective.vue$@'
    }
  ]
}
