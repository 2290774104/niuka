<template>
  <el-row :gutter="20">
    <el-col
      v-for="(item, index) in list"
      :key="index"
      :lg="8"
      :md="12"
      :sm="24"
    >
      <el-card class="box-card" shadow="hover" @click.native="handleClick(item)">
        <div slot="header" class="clearfix">
          <span>{{ item.name }}</span>
        </div>
        <div class="content">内容</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { PropType } from 'vue';

declare interface ICard {
  name: string;
  src: string;
}

export default {
  props: {
    list: {
      type: Array as PropType<ICard[]>,
      default: () => [],
    },
  },
  methods: {
    handleClick(item: ICard) {
      const src = `/pages/components/${item.src}`;
      const a = document.createElement('a')
      console.log(src);
      
      a.href = src
      a.click()
    },
  },
};
</script>

<style lang="styl" scoped>
.el-card {
  cursor: pointer;

 ::v-deep .el-card__body {
    background-color: #F5F7FA;
  }
}
</style>
