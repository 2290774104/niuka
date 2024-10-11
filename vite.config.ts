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
        // 
        { find: 'vue', replacement: 'vue/dist/vue.esm.js' },
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
        external: ['vue'],
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
