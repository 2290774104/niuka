---
lang: zh-CN
title: Switch 开关
date: 2024-10-12 09:42:18
description: 开关组件
---

# Switch 开关

## 特性

1. 使用 v-model 绑定选中标签的值
2. 传入 info 即可渲染组件
3. 可以通过 v-for 批量渲染，支持 sort 序号显示
4. 支持 slot 显示备注信息
5. 基于 vue2 版本封装，强依赖于 element-ui
6. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

绑定 `v-model` 记录开关的值，传入记录开关信息的 `info`

可以通过 `change` 事件监听开关值的变化

<preview-components>
  <niuka-switch-base slot="component"></niuka-switch-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSwitch/base.vue
</preview-components>

## 备注插槽

通过组件 `showRemark` 属性和 `remark` 插槽可以实现自定义的备注信息

通过组件 `userEdit` 属性可以在备注信息后显示编辑图片，通过 `edit` 事件自行处理后续逻辑

<preview-components>
  <niuka-switch-remark slot="component"></niuka-switch-remark>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSwitch/remark.vue
</preview-components>

## 显示序号

通过组件 `showSort` 属性和 `info` 中设置序号字段，可以在左上角显示序号

<preview-components>
  <niuka-switch-sort slot="component"></niuka-switch-sort>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSwitch/sort.vue
</preview-components>

## NiukaSwitch Attributes

<attribute-table :data="niukaSwitchAttributes"></attribute-table>

## NiukaSwitch Events

<attribute-table :data="niukaSwitchEvents" type="event"></attribute-table>

## NiukaSwitch Slots

<attribute-table :data="niukaSwitchSlots" type="slot"></attribute-table>

## Info Attributes

<attribute-table :data="infoAttributes"></attribute-table>

<script>
  export default {
    data() {
      return {
        niukaSwitchAttributes: [
          { name: 'value / v-model', dec: '绑定值', type: 'boolean/string/number' },
          { name: 'info', dec: '开关信息', type: 'link:Info:#info-attributes' },
          { name: 'label-key', dec: 'info 中代表 label 的字段', type: 'string', default: 'label' },
          { name: 'active-color', dec: '开关开启时的颜色', type: 'string', default: '#13ce66' },
          { name: 'inactive-color', dec: '开关关闭时的颜色', type: 'string', default: '#cccccc' },
          { name: 'show-sort', dec: '是否显示左上序号', type: 'boolean', default: 'false' },
          { name: 'sort-key', dec: 'info 中代表序号的字段', type: 'string', default: 'sort' },
          { name: 'show-remark', dec: '是否显示备注区域', type: 'boolean', default: 'false' },
          { name: 'user-edit', dec: '是否显示编辑按钮', type: 'boolean', default: 'false' },
        ],
        niukaSwitchEvents: [
          { name: 'change', dec: '开关状态发生变化', type: 'Function:(value) => void' },
          { name: 'edit', dec: '点击编辑图标时的回调', type: 'Function:(info: Info) => void' },
        ],
        niukaSwitchSlots: [
          { name: 'remark', dec: '用于添加显示在备注区域的元素' },
        ],
        infoAttributes: [
          { name: 'active-value', dec: '开关开启时的值', type: 'boolean/string/number' },
          { name: 'inactive-value', dec: '开关关闭时的值', type: 'boolean/string/number' },
        ]
      }
    }
  }
</script>
