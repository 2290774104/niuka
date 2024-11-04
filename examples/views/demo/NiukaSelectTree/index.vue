<template>
  <div>
    <div>可筛选，value：{{ value }}</div>
    <niuka-select-tree
      v-model="value"
      :data="data"
      filterable
    ></niuka-select-tree>
    <div>多选，value：{{ value2 }}</div>
    <niuka-select-tree
      v-model="value2"
      :data="data"
      multiple
    ></niuka-select-tree>
    <div>仅子级可选，value：{{ value3 }}</div>
    <niuka-select-tree
      v-model="value3"
      :data="data"
      select-leaf
    ></niuka-select-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NiukaSelectTree from 'component/SelectTree';

@Component({ name: 'NiukaSelectTreeView', components: { NiukaSelectTree } })
export default class NiukaSelectTreeView extends Vue {
  public value = '';

  public value2 = [];

  public value3 = '';

  public data = [
    {
      id: 1,
      label: '一级 2',
      children: [
        {
          id: 3,
          label: '二级 2-1',
          children: [
            {
              id: 4,
              label: '三级 3-1-1',
            },
            {
              id: 5,
              label: '三级 3-1-2',
              disabled: true,
            },
          ],
        },
        {
          id: 2,
          label: '二级 2-2',
          disabled: true,
          children: [
            {
              id: 6,
              label: '三级 3-2-1',
            },
            {
              id: 7,
              label: '三级 3-2-2',
              disabled: true,
            },
          ],
        },
      ],
    },
  ];
}
</script>

<style lang="scss" scoped></style>
