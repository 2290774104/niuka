---
lang: zh-CN
title: SelectColumn 下拉选择栏目
date: 2024-11-12 16:08:44
description: 下拉选择栏目
---

# SelectColumn 下拉选择栏目

## 特性

1. 使用 v-model 绑定选中标签的值
2. 传入 net-work 配置数据源
3. 支持下拉树模糊查询
4. 基于 vue2 版本封装，强依赖于 element-ui
5. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

通过 `net-work` 配置数据源

<preview-components>
  <niuka-select-column-base slot="component"></niuka-select-column-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelectColumn/base.vue
</preview-components>

## 基本用法

通过设置 `filterable` 属性，开启模糊匹配

<preview-components>
  <niuka-select-column-filter slot="component"></niuka-select-column-filter>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelectColumn/filter.vue
</preview-components>

## NiukaSelectColumn Attributes

<attribute-table :data="niukaSelectColumnAttributes"></attribute-table>

## NiukaSelectColumn Events

<attribute-table :data="niukaSelectColumnEvents" type="event"></attribute-table>

<script>
  export default {
    data() {
      return {
        niukaSelectColumnAttributes: [
          { name: 'value / v-model', dec: '绑定值', type: 'string/number/string[]/number[]' },
          { name: 'net-work', dec: '远端获取配置', type: 'link:NetWork:#netWork-attributes' },
          { name: 'result-field', dec: '远端获取数据取值字段', type: 'string', default: 'data' },
          { name: 'recently', dec: '是否记录常用项', type: 'boolean', default: 'true' },
          { name: 'filterable', dec: '是否开启模糊匹配', type: 'boolean', default: 'true' },
        ],
        niukaSelectColumnEvents: [
          { name: 'change', dec: '下拉数据变更事件', type: 'Function:({ value, Option[] }) => void' },
        ]
      }
    }
  }
</script>
