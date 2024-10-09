import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';
import copyPlugin from 'rollup-plugin-copy';
// @ts-ignore
export default defineConfig((env: ConfigEnv) => {
  const { mode } = env;
  return {
    plugins: [createVuePlugin({ jsx: true })],
    base: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
    server: {
      port: 8080,
    },
    resolve: {
      alias: [
        { find: '@', replacement: resolve(__dirname, './src') },
        { find: '@utils', replacement: resolve(__dirname, './src/utils') },
        { find: 'vue', replacement: 'vue/dist/vue.esm.js' },
      ],
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      lib: {
        entry: './src/components/index.ts',
        name: 'NiukaComponents',
        fileName: 'index',
      },
      outDir: 'niuka-components',
      rollupOptions: {
        external: ['vue'],
        plugins: [
          copyPlugin({
            verbose: true,
            hook: 'closeBundle',
            targets: [
              { src: './README.md', dest: 'niuka-components/' },
              { src: './package.json', dest: 'niuka-components/' },
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
