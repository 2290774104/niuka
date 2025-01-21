---
lang: zh-CN
title: TagsInput 标签输入器
date: 2024-10-29 16:08:24
description: 标签输入器
---

# TagsInput 标签输入器

## 特性

1. 使用 v-model 绑定创建的标签值
2. 支持设置可创建标签的数量
3. 支持组件外手动设置标签
4. 基于 vue2 版本封装，强依赖于 element-ui
5. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

绑定 `v-model` 记录创建标签的值，通过输入框输入后按回车键创建标签

<preview-components>
  <niuka-tags-input-base slot="component"></niuka-tags-input-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaTagsInput/base.vue
</preview-components>

## 纯数字标签校验

设置 `check-number` 属性，可在创建标签的时候进行纯数字校验

<preview-components>
  <niuka-tags-input-number slot="component"></niuka-tags-input-number>
  <<< @/docs/.vuepress/components/docsComponents/NiukaTagsInput/number.vue
</preview-components>

## 组件赋值

通过修改 `v-model` 绑定的值，或者通过组件内置方法 `addTags`，可以修改标签

<preview-components>
  <niuka-tags-input-value slot="component"></niuka-tags-input-value>
  <<< @/docs/.vuepress/components/docsComponents/NiukaTagsInput/value.vue
</preview-components>

## 组件禁用

设置 `disabled` 属性，即可禁用组件，无法添加/删除标签

<preview-components>
  <niuka-tags-input-disabled slot="component"></niuka-tags-input-disabled>
  <<< @/docs/.vuepress/components/docsComponents/NiukaTagsInput/disabled.vue
</preview-components>

## 删除提示框

设置 `remove-dialog` 属性，在点击删除时会出现提示框，点击确认后删除标签

<preview-components>
  <niuka-tags-input-remove slot="component"></niuka-tags-input-remove>
  <<< @/docs/.vuepress/components/docsComponents/NiukaTagsInput/remove.vue
</preview-components>

## NiukaTagsInput Attributes

<attribute-table :data="niukaTagsInputAttributes"></attribute-table>

<script>
  export default {
    data() {
      return {
        niukaTagsInputAttributes: [
          { name: 'check-number', dec: '创建标签时是否进行纯数字校验', type: 'boolean', default: false },
          { name: 'limit', dec: '可创建标签数量上限', type: 'number' },
          { name: 'no-input', dec: '不允许通过输入的方式创建标签', type: 'boolean', default: false },
          { name: 'disabled', dec: '是否禁用组件', type: 'boolean', default: false },
        ],
      }
    }
  }
</script>
