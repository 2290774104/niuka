---
lang: zh-CN
title: Contextmenu 右键菜单
date: 2025-02-06 09:17:44
description: 右键菜单组件
---

# Contextmenu 右键菜单

## 特性

1. 传入 menus 渲染菜单列表
2. 支持配置触发容器，通过传入 carrier 配置触发容器
3. 支持配置 icon
4. 基于 vue2 版本封装，强依赖于 element-ui
5. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

通过 `menus` 传入菜单，即可在右键点击指定区域展示菜单，通过 `carrier` 配置区域，该参数必须是有效的 CSS 选择器字符串

<preview-components>
  <niuka-contextmenu-base slot="component"></niuka-contextmenu-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaContextmenu/base.vue
</preview-components>

## NiukaContextmenu Attributes

<attribute-table :data="niukaContextmenuAttributes"></attribute-table>

## NiukaContextmenu Events

<attribute-table :data="niukaTableEvents" type="event"></attribute-table>

## Menu Attributes

<attribute-table :data="menuAttributes"></attribute-table>

<script>
  export default {
    data() {
      return {
        niukaContextmenuAttributes: [
          { name: 'menus', dec: '菜单列表', type: 'link:Menu[]:#menu-attributes' },
          { name: 'carrier', dec: '右键区域', type: 'DOMString', default: '.carrier' },
        ],
        niukaTableEvents: [
          { name: 'event', dec: '点击菜单项', type: 'Function:(Menu) => void' },
        ],
        menuAttributes: [
          { name: 'title', dec: '显示的标题', type: 'string' },
          { name: 'icon', dec: '标题前的图标，对应element图标class', type: 'string' },
          { name: 'event', dec: '事件名', type: 'string' },
        ],
      }
    }
  }
</script>
