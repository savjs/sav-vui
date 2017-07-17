## 样式

- sav-input  基本样式

### 修饰器

- is-active  激活状态
- is-disabled  禁用状态
- readonly  只读状态

### 内嵌元素

- as-icon 图标

## 组件

- ​

### 属性

```
| 参数             | 说明     | 类型                | 可选值                          | 默认值   |
|------------     |--------- |-------------------  |------------------------------- |----------|
- [x] size        |   尺寸    |  Boolean / String   | 尺寸选项 可选值为 [small, large] |  false
- [x] color       |   颜色    |  Boolean / String   | 颜色选项 可选值为 [primary, secon
                                                    dary,success, warn, info, error] |  false
- [ ] icon        |图标，已有的图标库中的图标名 |String|  ———————————————————————       |  
- [x] type        |   类型    |       String        |   text / textarea               |  text
- [x] disabled    |是否禁用状态 | Boolean / String   | 设置按钮为禁用状态 [true, false] |  false    
- [ ] value       |  绑定值   |  String /  Number   |   ———————————————————————       |  false   
- [x] rows        | 输入行数(只对type="textarea"有效) | Number |  ———————————————      |  
- [x] maxlength   |最大输入长度|      Number         |  ———————————————————————————    |  
- [x] minlength   |最小输入长度|      Number         |  ———————————————————————————    |  
- [x] autofocus   |原生属性，自动获取焦点| true/false,false |         boolen            | false
```

## 例子

- 基础例子