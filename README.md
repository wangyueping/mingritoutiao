# 随笔记录一些问题

## 一、Vue中使用vw适配移动端

### 1、在项目中引入插件

```js
npm install postcss-px-to-viewport --save-dev
npm install postcss-import --save-dev
npm install postcss-url --save-dev
npm install postcss-px-to-viewport-opt --save-dev
```

### 2、在目录创建一个postcss.config.js文件

```js
module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        "autoprefixer": {
            path: ['./src/*']
        },
        "postcss-px-to-viewport-opt": {
            // "viewportWidth": "750", //视窗的宽度，对应的是我们设计稿的宽度
            // "viewportHeight": "1334", // 视窗的高度
            "unitPrecision": 2, //指定`px`转换为视窗单位值的小数位数(很多时候无法整除)
            "viewportUnit": "vw", //指定需要转换成的视窗单位，建议使用vw
            "selectorBlackList": [], //指定不转换为视窗单位的类
            "minPixelValue": 1, // 小于或等于`1px`不转换为视窗单位
            "mediaQuery": false, // 允许在媒体查询中转换`px`
            // "exclude": /(\/|\\)(node_modules)(\/|\\)/
        },
        // postcss-pxtorem 插件的版本需要 >= 5.0.0
        // 引入vant2 UI组件库，自动适配vw
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            propList: ['*'],
        },
    }
}
```

