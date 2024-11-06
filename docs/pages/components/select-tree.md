---
lang: zh-CN
title: SelectTree 下拉选择树
date: 2024-11-04 10:59:43
description: 下拉选择树组件
---

# SelectTree 下拉选择树

## 特性

1. 使用 v-model 绑定选中标签的值
2. 传入 data 即可渲染组件
3. 支持下拉树模糊查询
4. 支持仅叶子级可勾选
5. 支持多选
6. 基于 vue2 版本封装，强依赖于 element-ui
7. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基本用法

通过 `data` 设置下拉树

<preview-components>
  <niuka-select-tree-base slot="component"></niuka-select-tree-base>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelectTree/base.vue
</preview-components>

## 节点过滤

通过设置 `filterable` 属性，开启模糊匹配

<preview-components>
  <niuka-select-tree-filter slot="component"></niuka-select-tree-filter>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelectTree/filter.vue
</preview-components>

## 多选

通过设置 `multiple` 属性，即可启用多选，此时 `v-model` 的值为当前选中值所组成的数组。

<preview-components>
  <niuka-select-tree-multiple slot="component"></niuka-select-tree-multiple>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelectTree/multiple.vue
</preview-components>

## 仅叶子级可选

设置 `select-leaf` 属性，所有带子级的节点无法选择，仅最后一级的节点可选

<preview-components>
  <niuka-select-tree-leaf slot="component"></niuka-select-tree-leaf>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelectTree/leaf.vue
</preview-components>

## 插槽

内置 `before` 和 `after` 两个插槽，可以在选项树之前/后添加自定选项

<preview-components>
  <niuka-select-tree-slot slot="component"></niuka-select-tree-slot>
  <<< @/docs/.vuepress/components/docsComponents/NiukaSelectTree/leaf.vue
</preview-components>

## NiukaSelectTree Attributes

<attribute-table :data="niukaSelectTreeAttributes"></attribute-table>

## NiukaSelectTree Events

<attribute-table :data="niukaSelectTreeEvents" type="event"></attribute-table>

## NiukaSelectTree Slots

<attribute-table :data="niukaSelectTreeSlots" type="slot"></attribute-table>

## NiukaSelectTree Methods

<attribute-table :data="niukaSelectTreeMethods" type="methods"></attribute-table>

## Props Attributes

<attribute-table :data="propsAttributes"></attribute-table>

<script>
	export default {
		data() {
			return {
				niukaSelectTreeAttributes: [
          { name: 'value / v-model', dec: '绑定值', type: 'string/number/string[]/number[]' },
          { name: 'data', dec: '生成下拉树的数据', type: 'TreeData[]' },
          { name: 'props', dec: '配置选项', type: 'link:Props[]:#props-attributes' },
          { name: 'multiple', dec: '是否多选', type: 'boolean', default: 'false' },
          { name: 'filterable', dec: '是否可搜索', type: 'boolean', default: 'false' },
          { name: 'selectLeaf', dec: '是否仅叶子级可选', type: 'boolean', default: 'false' },
          { name: 'clickToSelected', dec: '点击节点时是否直接勾选', type: 'boolean', default: true },
        ],
				niukaSelectTreeEvents: [
          { name: 'change', dec: '下拉选项变更事件', type: 'Function:(value) => void' },
          { name: 'selected', dec: '数据选中时触发', type: 'Function:(data: TreeData) => void' },
				],
        niukaSelectTreeSlots: [
          { name: 'before', dec: '下拉树选项之前' },
          { name: 'after', dec: '下拉树选项之后' },
        ],
        niukaSelectTreeMethods: [
          { name: 'setCheckedKeys', dec: '通过 keys 设置下拉树勾选的节点', type: 'Function:(keys: string[]) => void' },
        ],
				propsAttributes: [
          { name: 'id', dec: '指定节点key和value为节点对象的某个属性值', type: 'string', default: 'id' },
          { name: 'label', dec: '指定节点标签为节点对象的某个属性值', type: 'string', default: 'label' },
          { name: 'disabled', dec: '指定节点选择框是否禁用为节点对象的某个属性值', type: 'string', default: 'disabled' },
          { name: 'children', dec: '指定子树为节点对象的某个属性值', type: 'string', default: 'children' },
				]
			}
		}
	}
</script>
