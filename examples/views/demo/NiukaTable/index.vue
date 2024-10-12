<template>
  <div>
    <niuka-table :data="data" :columns="columns" :pagination="pagination">
      <template #slot="{ column }">
        这里是自定义插槽：{{ column.prop }}
      </template>
    </niuka-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NiukaTable from 'component/Table/modules/NiukaTable.vue';
import { IData, IColumn, IPagination } from 'component/Table/types';

@Component({ name: 'NiukaTableView', components: { NiukaTable } })
export default class NiukaTableView extends Vue {
  public data: IData = [
    {
      title: '数据1',
      date: '',
    },
    {
      title: '数据2',
      date: '',
    },
  ];

  public columns: IColumn[] = [
    { label: '', prop: 'selection', type: 'selection' },
    { label: '序号', prop: 'index', type: 'index' },
    { label: '标题', prop: 'title' },
    { label: '日期', prop: 'date' },
    { label: '插槽', prop: 'slot', customRender: 'slot' },
  ];

  public pagination: IPagination = {
    currentPage: 1,
    pageSize: 10,
  };
}
</script>

<style lang="scss" scoped></style>
