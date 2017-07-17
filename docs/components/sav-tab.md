## 样式

- sav-tab  基本样式

### 修饰器

- is-active  激活状态
- is-disabled  禁用状态
- is-loading  加载中

### 内嵌元素

- as-icon  图标

## 组件

- TabModify
- TabComponent

### 属性

```
| 参数             | 说明     | 类型                | 可选值                          | 默认值   |
|------------     |--------- |-------------------  |------------------------------- |----------|
- [x] size        |   尺寸    |  Boolean / String   | 尺寸选项 可选值为 [small, large] |  false
- [x] color       |   颜色    |  Boolean / String   | 颜色选项 可选值为 [primary, secon
                                                    dary,success, warn, info, error] |  false
- [x] flex        |   定位  |   String / Boolean    |  —————————————————————————     |  false 
- [x] type        |   类型  |   Number / Boolean    |  —————————————————————————     |  0 
- [x] value       |  绑定值   |String/Number/Boolean/Object/Array|   ——————————————— |
- [x] textField   | 文本域    |       String        |  —————————————————————————      |  text 
- [x] valueField  |   值域    |       String        |  —————————————————————————      |  value
- [x] navComponent|          |    String/Object    |  —————————————————————————      |  navItem 
- [x] contentComponent|       |       String        |  —————————————————————————    |contentItem
- [x] contentField|   内容    |       String        |  —————————————————————————      |  content
```

## 例子

- 基础例子