---
lang: zh-CN
title: Select 下拉选择
date: 2024-10-18 11:19:16
description: 下拉选择组件
---

# Select 下拉选择

## 特性

1. 使用 v-model 绑定选中标签的值
2. 传入 option 即可渲染组件
3. 可以配置接口远程获取下拉选项，可通过 load 控制远程获取选项的时机
4. 可以通过配置懒加载，分页获取下拉选项，并支持模糊查询
5. 基于 vue2 版本封装，强依赖于 element-ui
6. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

通过 `option` 设置数据项

<preview-components>
  <niuka-select-base slot="component"></niuka-select-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelect/base.vue
</preview-components>

## 远端获取下拉选项

通过配置 `dataType` 为 `custom` 并通过 `netWork` 配置接口及参数，即可从远端获取下拉选项

<preview-components>
  <niuka-select-custom slot="component"></niuka-select-custom>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelect/custom.vue
</preview-components>

## 数据分页

配置 `` 属性，即可在获取数据时增加分页参数，下拉选项滑动到底部时触发加载更多

<preview-components>
  <niuka-select-page slot="component"></niuka-select-page>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelect/page.vue
</preview-components>

## NiukaSelect Attributes

<attribute-table :data="niukaSelectAttributes"></attribute-table>

## NiukaSelect Events

<attribute-table :data="niukaSelectEvents" type="event"></attribute-table>

## OptionAttrs Attributes

<attribute-table :data="optionAttrs"></attribute-table>

## NetWork Attributes

<attribute-table :data="netWork"></attribute-table>

## Option Attributes

<attribute-table :data="optionAttributes"></attribute-table>

<script>
  export default {
    data() {
      return {
        niukaSelectAttributes: [
          { name: 'value / v-model', dec: '绑定值', type: 'string/number/string[]/number[]' },
          { name: 'option-attrs', dec: '配置下拉数据中的字段', type: 'link:OptionAttrs:#optionAttrs-attributes', default: '{ value: "value", label: "label" }' },
          { name: 'data-type', dec: '数据类型(本地数据还是远端数据)', type: 'enum:default|custom', default: 'default' },
          { name: 'net-work', dec: '远端获取配置', type: 'link:NetWork:#netWork-attributes' },
          { name: 'options', dec: '默认的下拉选项', type: 'link:Option[]:#option-attributes' },
          { name: 'width', dec: '下拉选项宽度', type: 'string/number', default: '100%' },
          { name: 'lazy', dec: '是否懒加载(远程加载时生效，带分页参数)', type: 'boolean', default: 'false' },
          { name: 'load', dec: '远程加载时是否开始加载(手动控制加载时机)', type: 'boolean', default: 'true' },
          { name: 'page-size', dec: '懒加载单页数据条数', type: 'number', default: 10 },
          { name: 'filter-field', dec: '远端获取筛选字段名', type: 'string', default: 'name' },
          { name: 'page-field', dec: '分页页码字段', type: 'string', default: 'page' },
          { name: 'size-field', dec: '分页单页数量字段', type: 'string', default: 'size' },
          { name: 'result-field', dec: '远端获取数据取值字段', type: 'string', default: 'data' },
          { name: '...', dec: '其他 el-select 属性，参考 element 文档', type: 'link:table-attributes:https://element.eleme.cn/#/zh-CN/component/select#select-attributes' }
        ],
        niukaSelectEvents: [
          { name: 'updata-option', dec: '从远端获取的下拉选项变更后', type: 'Function:(Option[]) => void' },
          { name: 'change', dec: '下拉选项变更事件', type: 'Function:({ value, Option[] }) => void' },
          { name: '...', dec: '其他 el-select 事件，参考 element 文档', type: 'link:table-events:https://element.eleme.cn/#/zh-CN/component/select#select-events' }
        ],
        optionAttrs: [
          { name: 'value', dec: '下拉数据中 value 对应字段', type: 'string', default: 'value' },
          { name: 'label', dec: '下拉数据中 label 对应字段', type: 'string', default: 'label' },
        ],
        netWork: [
          { name: 'method', dec: '远程请求方法', type: 'function' },
          { name: 'params', dec: '远程请求参数', type: 'object' },
        ],
        optionAttributes: [
          { name: 'hidden', dec: '是否隐藏选项', type: 'boolean', default: false },
          { name: 'disabled', dec: '是否禁用选项', type: 'boolean', default: false },
          { name: '...', dec: '其他自定义字段', type: 'any' }
        ]
      }
    }
  }
</script>
