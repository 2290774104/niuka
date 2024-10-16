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
			],
			dataList: [
				{ name: 'Table 表格', src: 'table' },
			],
			navigationList: [
				{ name: 'Steps 步骤条', src: 'steps' },
				{ name: 'Anchor 锚点', src: 'anchor' },
			]
		}
	}
}
</script>
