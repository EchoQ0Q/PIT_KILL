## Redux

### 三大原则

> - 单一数据源
> - state 只读
> - 数据改变只通过纯函数来改变

- 纯函数指的是给定固定的输入，就会有固定的输出，而且不会有副作用（对参数的修改）

### REDUX 问题

### 1. 为什么要用 actionCreator 统一创建 action

提高代码的可维护性，方便前端自动化测试。

### 2. react-redux 中 Provider 的作用

核心 API，作为中间桥梁连接 store 与子组件的，使子组件有能力获取 store 中的数据。

### 3. connect

核心 API，子组件通过 connect 连接 store，通过 mapStateToProps，mapDispatchToProps 两个规则函数去与 store 数据做映射。
