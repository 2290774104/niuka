---
lang: zh-CN
title: Overview 组件总览
date: 2024-09-29 15:35:52
description: 展示 niuka-components 提供的所有组件
---

# Overview 组件总览

## Form 表单组件

<overview-list :list="formList"></overview-list>

## Data 数据展示

<overview-list :list="dataList"></overview-list>

## Navigation 导航

<overview-list :list="navigationList"></overview-list>

<script>
export default {
	data() {
		return {
			formList: [
				{ name: 'Switch 开关', src: 'switch' },
				{ name: 'Select 下拉选择', src: 'select' },
				{ name: 'TagsInput 标签输入器', src: 'tags-input' },
				{ name: 'SelectTree 下拉选择树', src: 'select-tree' },
				{ name: 'SelectColumn 下拉选择栏目', src: 'select-column' },
			],
			dataList: [
				{ name: 'Table 表格', src: 'table' },
				{ name: 'ImageList 图片列表', src: 'image-list' },
				{ name: 'LoadList 懒加载列表', src: 'load-list' },
			],
			navigationList: [
				{ name: 'Steps 步骤条', src: 'steps' },
				{ name: 'Anchor 锚点', src: 'anchor' },
			]
		}
	}
}
</script>
