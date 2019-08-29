## 样式处理

- css-loader 编译css文件
- style-loader 将样式添加到页面的head标签中去
    > 常见options
    - insert: `string|function`
- less-loader、less

### 抽离css样式文件
使用webpack插件 — mini-css-extract-plugin

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

{
    plugins: [ new MiniCssExtractPlugin() ],
    module: { rules : [{
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader ]
    }]
}
```

### postcss-loader autoprefixer

```javascript
module.exports = {
    plugins: [ require('autoprefixer') ]
}
```


> 需要使用`browserslist`来兼容旧版本浏览器，示例如下：

```javascript
defaults,
not ie < 8,
> 1%,
last 2 versions,
last 3 iOS versions
```

## 压缩css和js
webpack插件：optimize-css-assets-webpack-plugin和uglifyjs-webpack-plugin
```javascript
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new uglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    }
```

> 如果我们单独在webpack的plugin里面`new OptimizeCssAssetsPlugin()`则不需要压缩js，
但是如果写在minimizer内，需要对两者都进行压缩。

## 转换es6语法
webpack插件：`babel-loader` `@babel/core` `@babel/preset-env`

如果需要扩展es7语法`class`,则需要安装相关babel插件。
```javascript
{ 
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
        }
    }
}
```

