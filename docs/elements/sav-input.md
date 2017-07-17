## 样式

- [x] sav-input 基本样式

### 修饰器

- [x] is-active 激活状态
- [x] is-disabled 禁用状态


### 内嵌元素

- [x] as-icon 图标

## 组件

### 属性
| 参数              | 说明    | 类型      | 可选值       | 默认值   |
|----------        |-------- |---------- |-------------  |-------- |
- [x] size         | 尺寸   | 	Boolean | String   |   输入框尺寸，只在 `type!="textarea"` 时有效    |  false
- [x] color         |颜色   | 	Boolean | String   |   颜色选项 可选值为 [primary, secondary, success, warn, info, error] |  false
- [x] disabled     | 是否禁用状态    | Boolean | String   | 	设置按钮为禁用状态  | false     
- [x] icon        | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
- [x] type         | 类型   | string  | text/textarea | text |
- [ ] value        | 绑定值           | string, number 
- [ ] icon         | 输入框尾部图标    | string          | — | — |
- [x] rows         | 输入框行数，只对 `type="textarea"` 有效  |  number | — 
- [x] maxlength    | 最大输入长度      | number          |  —  | — |
- [x] minlength    | 最小输入长度      | number          |  —  | — |
- [x] autofocus    | 原生属性，自动获取焦点 | boolean | true, false | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| click | 点击 Input 内的图标时触发 | event |
| blur | 在 Input 失去焦点时触发 | event |
| focus | 在 Input 或得焦点时触发 | event |


## 例子

- [ ] 基础例子 
