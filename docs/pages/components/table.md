---
lang: zh-CN
title: Table 表格
date: 2024-10-12 09:42:18
description: 表格组件
---

# Table 表格

## 特性

1. 传入 columns 渲染表格列
2. 传入 data 渲染表格数据
3. 内置分页插件，通过传入 pagination 配置分页插件
4. 支持 el-table 所有属性和事件
5. 支持使用插槽配置表格项，通过 customRender 设置插槽名
6. 基于 vue2 版本封装，强依赖于 element-ui
7. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

通过 `columns` 设置列，通过 `data` 传入数据即可渲染表格

<preview-components>
  <niuka-table-base slot="component"></niuka-table-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaTable/base.vue
</preview-components>

## 展示分页

通过 `pagination` 配置分页，`pagination` 默认为 `false`

<preview-components>
  <niuka-table-page slot="component"></niuka-table-page>
  <<< @/docs/.vuepress/components/docsComponents/NiukaTable/page.vue
</preview-components>

## 支持 el-table 中的属性

组件支持了 `el-table` 中的所有属性

<preview-components>
  <niuka-table-attributes slot="component"></niuka-table-attributes>
  <<< @/docs/.vuepress/components/docsComponents/NiukaTable/attributes.vue
</preview-components>

## 自定义插槽

可通过 `customRender` 配置自定义插槽。插槽提供了多个参数：`row` 当前行的数据，`column` 当前列的配置，`cellValue`当前单元格的值等

<preview-components>
  <niuka-table-slot slot="component"></niuka-table-slot>
  <<< @/docs/.vuepress/components/docsComponents/NiukaTable/slot.vue
</preview-components>

## NiukaTable Attributes

<attribute-table :data="niukaTableAttributes"></attribute-table>

## NiukaTable Events

<attribute-table :data="niukaTableEvents"></attribute-table>

## Column Attributes

<attribute-table :data="columnAttributes"></attribute-table>

## Pagination Attributes

<attribute-table :data="paginationAttributes"></attribute-table>

<script>
  export default {
    data() {
      return {
        niukaTableAttributes: [
          { name: 'data', dec: '表格数据', type: 'array' },
          { name: 'columns', dec: '表格列的配置项', type: 'link:Column[]:#column-attributes' },
          { name: 'pagination', dec: '分页配置', type: 'link:Pagination:#pagination-attributes' },
          { name: 'total', dec: '列表数据总数', type: 'number' },
          { name: '...', dec: '其他 el-table 属性，参考 element 文档', type: 'link:table-attributes:https://element.eleme.cn/#/zh-CN/component/table#table-attributes' }
        ],
        niukaTableEvents: [
          { name: 'page-change', dec: '分页发生变化', type: 'Function:({pageSize: number, currentPage: number}) => void' },
          { name: '...', dec: '其他 el-table 事件，参考 element 文档', type: 'link:table-events:https://element.eleme.cn/#/zh-CN/component/table#table-events' }
        ],
        columnAttributes: [
          { name: 'type', dec: '对应列的类型', type: 'enum:selection|index|expand' },
          { name: 'label', dec: '显示的标题', type: 'string' },
          { name: 'prop', dec: '对应列内容的字段名', type: 'string' },
          { name: 'width', dec: '对应列的宽度', type: 'string | number' },
          { name: 'hidden', dec: '是否隐藏列', type: 'boolean', default: 'false' },
          { name: 'fixed', dec: '列是否固定在左侧或者右侧，true 表示固定在左侧', type: 'enum:true|left|right' },
          { name: 'align', dec: '对齐方式', type: 'enum:center|left|right', default: 'center' },
          { name: 'customRender', dec: '自定义渲染插槽名', type: 'string' },
          { name: 'scopedSlots', dec: '定义插槽', type: '{customRender: string}' },
          { name: '...', dec: '其他 Table-column 属性，参考 element 文档', type: 'link:table-column-attributes:https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes' }
        ],
        paginationAttributes: [
          { name: 'currentPage', dec: '当前页码', type: 'number', default: 1 },
          { name: 'pageSize', dec: '每页显示条目个数', type: 'number', default: 10 },
          { name: 'pageSizes', dec: '每页显示个数选择器的选项设置', type: 'number[]', default: '[10, 20, 30, 50]' },
          { name: 'layout', dec: '组件布局，子组件名用逗号分隔', type: 'string', default: 'prev, pager, next, sizes, total' },
          { name: 'background', dec: '是否为分页按钮添加背景色', type: 'boolean', default: true },
        ]
      }
    }
  }
</script>
