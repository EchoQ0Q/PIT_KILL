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
    module: { rules : [{
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader ]
    }]
}
```

### postcss-loader autoprefixer
::
需要浏览器兼容的文件（待补充）
::
```javascript
module.exports = {
    plugins: [ require('autoprefixer') ]
}
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

::
如果我们单独在webpack的plugin里面`new OptimizeCssAssetsPlugin()`则不需要压缩js，
但是如果写在minimizer内，需要对两者都进行压缩。
::
