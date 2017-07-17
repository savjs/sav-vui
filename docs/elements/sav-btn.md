## 样式

- [x] sav-btn  基本样式

### 修饰器

- [x] is-active  激活状态
- [x] is-disabled  禁用状态
- [x] is-loading  加载中

### 内嵌元素

- [x] as-icon  图标

## 组件

- [x] BtnModify

### 属性

```
| 参数             | 说明     | 类型                | 可选值                          | 默认值   |
|------------     |--------- |-------------------  |------------------------------- |----------|
- [x] size        |   尺寸    |  Boolean | String   | 尺寸选项 可选值为 [small, large] |  false
- [x] color       |   颜色    |  Boolean | String   | 颜色选项 可选值为 [primary, secon
                                                    dary,success, warn, info, error]  |  false
- [x] disabled    |是否禁用状态 | Boolean | String |  设置按钮为禁用状态             | false   
- [x] to          |  超链接   | Boolean | String    |   设置按钮为禁用状态               | false   
- [ ] icon        | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
- [ ] loading     | 是否加载中状态   | Boolean       | 设置按钮为加载中状态              | false  
```

## 例子

- [x] 基础例子