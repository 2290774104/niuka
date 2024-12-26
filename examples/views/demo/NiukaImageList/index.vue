<template>
	<div>
		<niuka-image-list :data="data" :pagination="pagination"></niuka-image-list>
		<niuka-image-list :data="[]" :pagination="pagination"></niuka-image-list>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NiukaImageList from 'component/ImageList/modules/NiukaImageList.vue';
import { IData, IPagination } from 'component/ImageList/types';

@Component({ name: 'NiukaTableView', components: { NiukaImageList } })
export default class NiukaTableView extends Vue {
	public data: IData = [
		{
			"title": "photo_1735109566557.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdrq7-AKWryABb29m6sxVk63.jpeg",
		},
		{
			"title": "photo_1735096238381.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdrd66AIVvZAAgGyYEOM2w40.jpeg",
		},
		{
			"title": "photo_1735093059789.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdra0SAXl62AAVScKZsouk50.jpeg",
		},
		{
			"title": "photo_1735092870695.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdraoeAP5pyAAn3KL7j98U32.jpeg",
		},
		{
			"title": "photo_1735092869561.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdraoaAD0V8AAmxNTT493E65.jpeg",
		},
		{
			"title": "photo_1735092848304.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdranGAaa8-AAfFiQqgiv435.jpeg",
		},
		{
			"title": "photo_1735092847329.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdranCAUuy0AAmbNSYMrE065.jpeg",
		},
		{
			"title": "photo_1735092733706.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdraf6Ac_YyAAeOsVVHpJM97.jpeg",
		},
		{
			"title": "photo_1735092732764.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdraf2AWkzLAAiHMC6hnLs46.jpeg",
		},
		{
			"title": "photo_1735092610986.jpeg",
			"url": "https://oss.devnbs.cn/M00/01/61/rBSSXmdraYOASTxtAAbxJCoMBmU35.jpeg",
		}
	]

	public pagination: IPagination = {
		currentPage: 1,
		pageSize: 10,
	};
}
</script>

<style lang="scss" scoped></style>