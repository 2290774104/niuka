---
lang: zh-CN
title: Steps 步骤条
date: 2024-09-29 15:35:52
description: 步骤条组件
---

# Steps 步骤条

牛咔视频平台步骤条组件

## 特性

1. 使用 active 绑定当前步骤
2. 传入 steps 即可渲染组件
3. 支持配置 icon 图标
4. 基于 vue2 版本封装

## 基础用法

设置 `active` 属性，接受一个 `Number`，表明步骤的 index，从 0 开始。

<preview-components>
  <niuka-steps-base slot="component"></niuka-steps-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSteps/base.vue
</preview-components>

## 配置 icon

可以在 `steps` 中配置 `icon` 字段来切换步骤中的图标

<preview-components>
  <niuka-steps-icon slot="component"></niuka-steps-icon>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSteps/base.vue
</preview-components>

## 步骤间距

每个 `step` 的间距，不填写默认 `152px`

<preview-components>
  <niuka-steps-space slot="component"></niuka-steps-space>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSteps/space.vue
</preview-components>

## StepsPlus Attributes

<attribute-table :data="stepsPlusAttributes"></attribute-table>

### Steps Attributes

<attribute-table :data="stepsAttributes"></attribute-table>

<script>
  export default {
    data() {
      return {
        stepsPlusAttributes: [
          { name: 'space', dec: '每个 step 的间距，不填写默认 152', type: 'number', default: 152 },
          { name: 'active', dec: '设置当前激活步骤', type: 'number', default: 0 },
          { name: 'steps', dec: '步骤配置', type: 'link:Steps:#steps-attributes' },
        ],
        stepsAttributes: [
          { name: 'title', dec: '步骤的标题', type: 'string'},
          { name: 'icon', dec: '步骤的图标', type: 'enum:filter|edit|setting' },
        ]
      }
    }
  }
</script>
