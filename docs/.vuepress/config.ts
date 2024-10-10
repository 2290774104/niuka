import { defineConfig } from 'vuepress/config';
import navbar from './navbar';
import sidebar from './sidebar';

export default defineConfig({
  base: '/niuka/',
  title: '牛咔视频组件文档',
  description: '牛咔视频组件文档',
  theme: '@vuepress/theme-default',
  themeConfig: {
    nav: navbar,
    sidebar: sidebar,
    sidebarDepth: 0,
  },
  port: 8081,
  sass: { indentedSyntax: true },
  chainWebpack(config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  '@babel/preset-env', // 可以识别es6语法
                  '@vue/babel-preset-jsx', // 解析jsx语法
                ],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                appendTsxSuffixTo: [/\.vue$/, /\.md$/],
              },
            },
          ],
        },
      ],
    },
  },
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
  ],
});
