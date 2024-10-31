import { defineConfig } from 'vite';
import type { ConfigEnv, UserConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';
import copyPlugin from 'rollup-plugin-copy';

export default defineConfig((env: ConfigEnv): UserConfig => {
  return {
    plugins: [createVuePlugin({ jsx: true })],
    server: {
      port: 8080,
    },
    resolve: {
      alias: [
        { find: '@', replacement: resolve(__dirname, './examples/') },
        { find: 'component', replacement: resolve(__dirname, './packages/') },
        // 处理 element-ui 表格无法渲染的问题
        { find: 'vue', replacement: 'vue/dist/vue.esm.js' },
        { find: '@http', replacement: resolve(__dirname, './http/index.ts') },
      ],
    },
    build: {
      target: ['es2015'],
      assetsInlineLimit: 0,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      lib: {
        entry: './packages/index.ts',
        name: 'NiukaComponents',
        fileName: 'index',
        formats: ['cjs', 'umd', 'es'],
      },
      outDir: 'niuka-components',
      rollupOptions: {
        // 打包时移除外部依赖
        external: ['vue', 'lodash', 'element-ui'],
        output: {
          // 外部依赖全局别名
          globals: {
            vue: 'Vue',
            lodash: '_',
            'element-ui': 'ELEMENT',
          },
        },
        plugins: [
          // copy 插件针对vite4封装，vite5中使用时会出现类型报错
          // @ts-ignore
          copyPlugin({
            verbose: true,
            hook: 'closeBundle',
            targets: [
              { src: './README.md', dest: 'niuka-components/' },
              { src: './package.json', dest: 'niuka-components/' },
              { src: './types', dest: 'niuka-components/' },
            ],
          }),
        ],
      },
    },
    define: {
      'process.env': {},
    },
  };
});
