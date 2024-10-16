---
lang: zh-CN
title: Anchor 锚点
date: 2024-09-29 15:35:52
description: 锚点组件
---

# Anchor 锚点

## 特性

1. 可根据页面中指定的 class 自动生成导航锚点
2. 支持传入 anchorLinks 手动配置锚点
3. 支持将锚点面板固定到页面一侧
4. 可点击按钮折叠/展开锚点面板
5. 基于 vue2 版本封装，强依赖于 element-ui
6. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

使用 `anchorLinks` 手动配置锚点

<preview-components>
  <niuka-anchor-base slot="component"></niuka-anchor-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaAnchor/base.vue
</preview-components>

## 自动生成

通过 `query` 配置生成锚点容器筛选条件，自动生成锚点

<preview-components>
  <niuka-anchor-auto slot="component"></niuka-anchor-auto>
  <<< @/docs/.vuepress/components/docsComponents/NiukaAnchor/auto.vue
</preview-components>

## 固定到屏幕

通过配置 `fixed` 可以实现把面板固定到屏幕

<preview-components>
  <niuka-anchor-fixed slot="component"></niuka-anchor-fixed>
  <<< @/docs/.vuepress/components/docsComponents/NiukaAnchor/fixed.vue
</preview-components>

## NiukaAnchor Attributes

<attribute-table :data="niukaAnchorAttributes"></attribute-table>

## Anchor Attributes

<attribute-table :data="anchorAttributes"></attribute-table>

<script>
export default {
  data() {
    return {
      niukaAnchorAttributes: [
          { name: 'anchorLinks', dec: '锚点信息', type: 'link:Anchor:#Anchor-attributes' },
          { name: 'query', dec: '自动生成锚点容器筛选条件', type: 'string', default: '.sub-title' },
          { name: 'fixed', dec: '是否固定到屏幕', type: 'boolean', default: true },
          { name: 'width', dec: '生成容器宽度，最大不超过 300px', type: 'string/number' },
          { name: 'top', dec: 'fixed 时生效，同定位中的 top', type: 'string', default: '120px' },
          { name: 'right', dec: 'fixed 时生效，同定位中的 right', type: 'string', default: '0px' },
      ],
      anchorAttributes: [
          { name: 'label', dec: '锚点的文本内容。', type: 'string' },
          { name: 'link', dec: '滚动到锚点位置容器的id', type: 'string' },
      ]
    }
  }
}
</script>
