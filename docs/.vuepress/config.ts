import { defineConfig } from 'vuepress/config';
import navbar from './navbar';
import sidebar from './sidebar';

export default defineConfig({
  title: '牛咔视频组件文档',
  description: '牛咔视频组件文档',
  theme: '@vuepress/theme-default',
  themeConfig: {
    nav: navbar,
    sidebar: sidebar,
  },
  plugins: [
    ['vuepress-plugin-demo-container', {}],
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {},
      },
    ],
  ],
});
