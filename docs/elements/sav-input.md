## 样式

- [x] sav-input 基本样式

### 修饰器

- [x] is-active 激活状态
- [x] is-disabled 禁用状态


### 内嵌元素

- [x] as-icon 图标

## 组件

### 属性

- [x] size         | 输入框尺寸，只在 `type!="textarea"` 时有效      |
- [x] color
- [x] disabled     | 禁用            | boolean         | — | false   |
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
