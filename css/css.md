## CSS

### 1. CSS 盒模型

css 盒模型分为标准盒模型和 IE 盒模型。
两者的区别在于计算宽度的高度的不同，标准盒模型的宽高只包括 content，IE 包括 border+padding。
标准盒模型设置：box-sizing：border-box；
IE 盒模型：box-sizing：content-box；

### 2. JS 如何设置获取盒模型的宽高

- dom.style.width/height (内联模式)
- dom.currentStyle.width/height (仅 IE 支持) 渲染后
- window.getComputedStyle(dom).width/height 渲染后
- dom.getBoundingClientRect.width/height （相对于视窗的位置集合）渲染后

### 3. 解释一下边距重叠的现象

两个或多个的块级元素的垂直边距会重合，且取两者相邻边距的最大值。

### 4. 边距重叠解决方案？（BFC）

BFC 是块级格式上下文。他是 web 页面中盒模型布局的 css 渲染模式，是一个独立的渲染区域。

### 5. BFC 的基本概念、原理（四个渲染规则）、形成条件

- 基本概念： BFC 是块级格式上下文
- 原理：
  > - 垂直方向的距离由 margin 决定
  > - BFC 区域不会与浮动元素的位置重叠
  > - BFC 是一个独立的元素，外面的元素不会影响里面的元素，反之亦然。
  > - 计算 BFC 高度时，浮动元素也会参与计算
- 形成条件：
  > - 浮动元素
  > - 定位元素（absolute、fixed）
  > - display 为以下其中之一的值 inline-block，table-cell，table-caption
  > - overflow 除了 visible 以外的值（hidden，auto，scroll）

### 6.
