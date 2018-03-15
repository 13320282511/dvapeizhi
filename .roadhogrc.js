const path = require('path');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, './src/svgs'),  // 业务代码本地私有 svgs 存放目录
  path.resolve(__dirname, './src/assets'),
];

export default {
  entry: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  publicPath: "/",
  "proxy": {
    "/api": {
      "target": "http://192.168.234.9:899",
      // "target": "http://abc.shinesec.com.cn",
      "changeOrigin": true,
      "pathRewrite": {"^/api": "/api"}
    },
    "/v2": {
      "target": "http://192.168.234.12:8080",
      "changeOrigin": true,
      "pathRewrite": {"^/v2": "/api"}
    },
    "/v1": {
      "target": "http://192.168.234.122/framework/public/index.php/api",
      "changeOrigin": true,
      "pathRewrite": {"^/v1": "/v1"}
    },
    "/es": {
      "target": {
        "host": "127.0.0.1",
        "protocol": "http:",
        "port": 8080
      },
      "changeOrigin": true,
      "pathRewrite": {"^/es": "/es"}
    },
    "/vv": {
      "target":  {
        "host": "192.168.253.34",
        "protocol": "http:",
        "port": 8080,
      },
      "changeOrigin": true,
      "pathRewrite": {"^/vv": "/api"}
    },
  },
  extraBabelPlugins: [
    "transform-runtime", ["import", { "libraryName": "antd-mobile", "style": "css" }]
  ],
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
      ],
      extraPostCSSPlugins: [
        // pxtorem({
        //   rootValue: 100 * (1080 / 750),
        //   propWhiteList: [],
        // }),
      ],
    },
    production: {
      extraPostCSSPlugins: [
        // pxtorem({
        //   rootValue: 100 * (1080 / 750),
        //   propWhiteList: [],
        // }),
      ],
    }
  },
  "ignoreMomentLocale": true
}
