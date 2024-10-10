import { defineConfig } from 'vuepress/config';
export default defineConfig({
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
