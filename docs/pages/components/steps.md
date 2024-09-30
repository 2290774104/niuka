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

:::demo

```vue
<template>
  <div>
    <niuka-steps :active="active" :steps="steps"></niuka-steps>
    <el-button @click="active++">下一步</el-button>
    当前的步骤是：{{ steps[active].title }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      steps: [
        { title: '设置基本信息' },
        { title: '设置直播功能' },
        { title: '设置直播详情' },
      ],
    };
  },
};
</script>
```

:::

## 配置 icon

可以在 `steps` 中配置 `icon` 字段来切换步骤中的图标

:::demo

```vue
<template>
  <div>
    <niuka-steps :active="active" :steps="steps"></niuka-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      steps: [
        { title: '设置基本信息', icon: 'edit' },
        { title: '设置直播功能', icon: 'edit' },
        { title: '设置直播详情', icon: 'edit' },
      ],
    };
  },
};
</script>
```

:::

## 步骤间距

每个 `step` 的间距，不填写默认 `152px`

:::demo

```vue
<template>
  <div>
    <niuka-steps :active="active" :steps="steps" :space="100"></niuka-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      steps: [
        { title: '设置基本信息' },
        { title: '设置直播功能' },
        { title: '设置直播详情' },
      ],
    };
  },
};
</script>
```

:::

## StepsPlus Attributes

| 属性名 | 说明                             | 类型                       | 默认值 |
| ------ | -------------------------------- | -------------------------- | ------ |
| space  | 每个 step 的间距，不填写默认 152 | number                     | —      |
| active | 设置当前激活步骤                 | number                     | 0      |
| steps  | 步骤配置                         | [Steps](#steps-attributes) | —      |

### Steps Attributes

| 属性名 | 说明       | 类型                                                                        | 默认值 |
| ------ | ---------- | --------------------------------------------------------------------------- | ------ |
| title  | 步骤的标题 | string                                                                      | —      |
| icon   | 步骤的图标 | enum <tool-tip content="'filter' &#124; 'edit' &#124;  setting"></tool-tip> | —      |
