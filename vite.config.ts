import { defineConfig } from 'vite';
import type { ConfigEnv } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';

export default defineConfig((env: ConfigEnv) => {
  return {
    plugins: [createVuePlugin({ jsx: true })],
    server: {
      port: 8080,
    },
    resolve: {
      alias: [
        { find: '@', replacement: resolve(__dirname, './examples/') },
        { find: 'component', replacement: resolve(__dirname, './packages/') },
      ],
    },
  };
});
