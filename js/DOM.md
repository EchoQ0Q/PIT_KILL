## DOM

### 1. DOM 事件级别

- DOM0 `ele.onclick=function(){}`
- DOM2 `ele.addEventListener('click', function(){}, false)`
- DOM3 `ele.addEventListener('keyup', function(){}, false)` 相对于 DOM2，添加了许多事件类型，例如鼠标事件、键盘事件

### 2. DOM 事件模型

事件模型分为捕获和冒泡
捕获是是从 window 接受，向下传播到具体的元素。
冒泡是从具体的元素接受，向上传播到 window。

### 3. DOM 事件流

事件流描述的是页面中接受事件的顺序。
事件流包括三个阶段：

- 事件捕获阶段
- 处于目标阶段
- 冒泡阶段

### 4. 描述 DOM 事件捕获的具体流程

window -> document -> html -> body -> 依次往下按照 dom 结构... -> 目标元素

### 5. Event 对象的常见应用

`ev.preventDefault()`: 阻止默认事件
`ev.stopPropagation()`: 阻止事件冒泡
`ev.stopImmediatePropagation()`: 事件响应优先级
`ev.currentTarget`: 绑定事件的对象（事件委托的父元素）
`ev.target`: 触发事件的具体对象 （事件委托的子元素）

### 6. 自定义事件

```
var eve = new Event('custome');
ev.addEventListener('custome', function(){
    console.log('custome');
});
ev.dispatchEvent(eve);
```
