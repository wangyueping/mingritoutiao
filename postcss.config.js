const path = require('path')
module.exports = ({ file }) => {
    // Vant UI适配vw
    const designWidth = file.indexOf('vant') !== -1 ? 375 : 750
    const designHeight = file.indexOf('vant') !== -1 ? 667 : 1334
    return {
        "plugins": {
            "postcss-import": {},
            "postcss-url": {},
            // to edit target browsers: use "browserslist" field in package.json
            "autoprefixer": {
                path: ['./src/*']
            },
            "postcss-px-to-viewport": {
                "viewportWidth": designWidth, //视窗的宽度，对应的是我们设计稿的宽度
                "viewportHeight": designHeight, // 视窗的高度
                "unitPrecision": 3, //指定`px`转换为视窗单位值的小数位数(很多时候无法整除)
                "viewportUnit": "vw", //指定需要转换成的视窗单位，建议使用vw
                "selectorBlackList": [], //指定不转换为视窗单位的类
                "minPixelValue": 2, // 小于或等于`1px`不转换为视窗单位
                "mediaQuery": false, // 允许在媒体查询中转换`px`
                // "exclude": /(\/|\\)(node_modules)(\/|\\)/
            }
        }
    }
}