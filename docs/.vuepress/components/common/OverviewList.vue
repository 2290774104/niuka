<template>
  <el-row :gutter="20">
    <el-col
      v-for="(item, index) in list"
      :key="index"
      :lg="8"
      :md="12"
      :sm="24"
    >
      <el-card
        class="box-card"
        shadow="hover"
        @click.native="handleClick(item)"
      >
        <div slot="header" class="clearfix">
          <span>{{ item.name }}</span>
        </div>
        <div class="content">内容</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

declare interface ICard {
  name: string;
  src: string;
}

// @ts-ignore
@Component({ name: 'OverviewList' })
export default class OverviewList extends Vue {
  // @ts-ignore
  @Prop({ type: Array, default: () => [] }) readonly list: ICard[];

  public handleClick(item: ICard) {
    const src = `${(this as any).$site.base}pages/components/${item.src}`;
    const a = document.createElement('a');
    console.log(src);

    a.href = src;
    a.click();
  }
}
</script>

<style lang="styl" scoped>
.el-card {
  cursor: pointer;

 ::v-deep .el-card__body {
    background-color: #F5F7FA;
  }
}
</style>
