---
lang: zh-CN
title: LoadList 懒加载列表
date: 2025-01-25 09:47:40
description: 懒加载列表
---

# LoadList 懒加载列表

## 特性

1. 传入 `list` 即可渲染列表
2. 使用 `loading`，`finish` 控制加载状态
3. 基于 vue2 版本封装，强依赖于 element-ui
4. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

通过 `list` 传入数据即可渲染列表

<preview-components>
  <niuka-load-list-base slot="component"></niuka-load-list-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaLoadList/base.vue
</preview-components>

## NiukaLoadList Attributes

<attribute-table :data="niukaLoadListAttributes"></attribute-table>

<script>
  export default {
    data() {
      return {
        niukaLoadListAttributes: [
          { name: 'list', dec: '列表数据', type: 'array' },
          { name: 'loading', dec: '列表是否正在加载', type: 'boolean' },
          { name: 'finish', dec: '列表是否加载完成', type: 'boolean' },
        ]
      }
    }
  }
</script>