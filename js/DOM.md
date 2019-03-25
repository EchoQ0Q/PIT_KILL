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

### SVG 与 CANVAS 区别

canvas 是 html5 提供的新特性，而 svg 本质是用 xml 技术描述的二维图形的语言。
从功能上来讲：
canvas 是一个画布，其绘制的图形是标量图，可以引入 jpg、png 格式的图片，性能方面要比 svg 好，像大型网络游戏，柱状图、饼图等等都可以用 canvas。
svg 绘制的图形是矢量图，矢量图可以被无限放大而不失真，所以百度地图就是 svg 技术做出来的。

从技术方面讲：
canvas 里面绘制的图形不能被引擎抓取，而 svg 绘制的图形可以，其本质就是 xml 元素，可以支持事件绑定。
另外 canvas 中绘制图形需要通过 js 来实现，而 svg 是通过标签来实现的。

### HTML5 新特性

- 用于绘画的 canvas 元素
- 用于媒介回放的 video 和 audio 元素
- 对本地离线存储的扩展支持 localStorage、sessionStorage、IndexedDB
- 新的语义化标签：article、footer、header、nav, section
- 新的表单控件：calendar、date、time、email、search
- DNS 以及链接网页的预加载处理

```javascript
<link rel="dns-prefetch" href="//www.baidu.com"/>
<link rel="prefetch" href="//s.gbin1.com">
```

### CSS3 新特性

- 新增的 CSS 选择器

  > 基本选择器：id（100）、类选择器（10）
  > 属性选择器（10）
  > 伪元素选择器 （1）:link、:visited、:hover、:active、:focus
  > 伪类-状态选择器 （10）:disabled、:checked
  > 伪类-结构选择器 （10）:first/last-child、:nth-child(n)
  > 组合选择器

- 多列布局 layout 和弹性布局 flex
- 文字特效 text-shadow 和文字渲染 text-decoration
- transform：移动 translate、缩放 scale、旋转 rotate、倾斜 skew
- 过渡和动画：transition 和 animate
- 媒体查询
