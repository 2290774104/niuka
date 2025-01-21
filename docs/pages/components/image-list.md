---
lang: zh-CN
title: ImageList 图片列表
date: 2025-01-21 10:22:25
description: 图片列表组件
---

# ImageList 图片列表

## 特性

1. 传入 data 渲染列表
2. 内置分页插件，通过传入 pagination 配置分页插件
3. 支持使用插槽(operate)配置操作按钮
4. 基于 vue2 版本封装，强依赖于 element-ui
5. 支持点击图片预览
6. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

通过 `data` 传入数据即可渲染列表

<preview-components>
  <niuka-image-list-base slot="component"></niuka-image-list-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaImageList/base.vue
</preview-components>

## NiukaImageList Attributes

<attribute-table :data="niukaImageListAttributes"></attribute-table>

## Pagination Attributes

<attribute-table :data="paginationAttributes"></attribute-table>

## NiukaImageList Slots

<attribute-table :data="niukaImageListSlots" type="slot"></attribute-table>

<script>
  export default {
    data() {
      return {
        niukaImageListAttributes: [
          { name: 'data', dec: '列表数据', type: 'array' },
          { name: 'pagination', dec: '分页配置', type: 'link:Pagination:#pagination-attributes' },
          { name: 'total', dec: '列表数据总数', type: 'number' },
          { name: 'urlKey', dec: '图片地址取值字段', type: 'string', default: 'url' },
          { name: 'titleKey', dec: '图片标题取值字段', type: 'string', default: 'title' },
        ],
        paginationAttributes: [
          { name: 'currentPage', dec: '当前页码', type: 'number', default: 1 },
          { name: 'pageSize', dec: '每页显示条目个数', type: 'number', default: 8 },
          { name: 'pageSizes', dec: '每页显示个数选择器的选项设置', type: 'number[]', default: '[8, 16, 24, 32]' },
          { name: 'layout', dec: '组件布局，子组件名用逗号分隔', type: 'string', default: 'prev, pager, next, sizes, total' },
          { name: 'background', dec: '是否为分页按钮添加背景色', type: 'boolean', default: true },
        ],
        niukaImageListSlots: [
          { name: 'operate', dec: '右下标题操作栏' },
        ],
      }
    }
  }
</script>
