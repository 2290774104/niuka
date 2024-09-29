import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';

export default defineConfig((env: ConfigEnv) => {
  const { mode } = env;
  return {
    plugins: [createVuePlugin({ jsx: true })],
    base: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
    server: {
      port: 8080,
    },
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
    build: {
      lib: {
        entry: './src/components/index.ts',
        name: 'NiukaComponents',
        fileName: 'index',
      },
      outDir: 'niuka-components',
      rollupOptions: {
        external: ['vue'],
      },
    },
    define: {
      'process.env': {},
    },
  };
});
