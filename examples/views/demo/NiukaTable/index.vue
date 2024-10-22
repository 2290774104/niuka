<template>
  <div>
    <div class="search mb10">
      <el-form :inline="true" :model="search" class="demo-form-inline">
        <el-form-item label="名称">
          <el-input
            v-model="search.name"
            size="small"
            placeholder="名称"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <niuka-table
      :data="data"
      :columns="columns"
      :pagination="pagination"
      :key="key"
    >
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
  public search = {
    name: '',
  };

  public key = 1;

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
