## 样式

- sav-input-group  基本样式

### 修饰器

- is-active  激活状态
- is-disabled  禁用状态
- readonly  只读状态

### 内嵌元素

- as-icon 图标

## 组件

- InputGroup

### 属性

```
| 参数             | 说明     | 类型                | 可选值                          | 默认值   |
|------------     |--------- |-------------------  |------------------------------- |----------|
- [x] size        |   尺寸    |  Boolean / String   | 尺寸选项 可选值为 [small, large] |  false
- [x] color       |   颜色    |  Boolean / String   | 颜色选项 可选值为 [primary, secon
                                                    dary,success, warn, info, error] |  false
- [x] disabled    |是否禁用状态 | Boolean / String   | 设置按钮为禁用状态 [true, false] |  false  
- [x] textField   | 文本域    |       String        |  —————————————————————————      |  text 
- [x] valueField  |   值域    |       String        |  —————————————————————————      |  value
- [x] options     |  继承对象 |        Array        | ——————————————————————————————  |  Array
- [x] inputName   |  name属性 |       String        | —————————————————————————————   |  
- [x] tiny        |          |String/Number/Boolean| —————————————————————————————    |  false
- [x] value       |  绑定值   |String/Number/Boolean/bject/rray|   ———————————————    |     
```

## 例子

- 基础例子