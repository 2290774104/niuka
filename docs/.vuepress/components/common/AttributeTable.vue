<template>
  <div class="attribute-table">
    <niuka-table :data="data" :columns="columns" :pagination="false">
      <template #type="{ cellValue }">
        <div v-if="cellValue.indexOf('link:') === 0">
          <el-link
            :underline="false"
            v-if="cellValue.includes('http')"
            @click="handleOpen(cellValue.substr(cellValue.indexOf('http')))"
          >
            {{ cellValue.split(':')[1] }}
          </el-link>
          <el-link :underline="false" v-else :href="cellValue.split(':')[2]">
            {{ cellValue.split(':')[1] }}
          </el-link>
        </div>
        <div v-else-if="cellValue.indexOf('enum:') === 0">
          <el-tooltip effect="light" placement="top">
            <div slot="content" class="tips">{{ showTips(cellValue) }}</div>
            <div>
              enum
              <el-button type="text">
                <i class="el-icon-warning-outline"></i>
              </el-button>
            </div>
          </el-tooltip>
        </div>
        <div v-else-if="cellValue.indexOf('Function:') === 0">
          <el-tooltip
            effect="light"
            placement="top"
            :content="cellValue.split(':')[1]"
          >
            <div slot="content" class="tips">{{ showFunc(cellValue) }}</div>
            <div>
              Function
              <el-button type="text">
                <i class="el-icon-warning-outline"></i>
              </el-button>
            </div>
          </el-tooltip>
        </div>
        <div v-else>
          {{ cellValue }}
        </div>
      </template>
      <template #def="{ cellValue }">
        {{ cellValue || '—' }}
      </template>
    </niuka-table>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IData, IColumn } from '../../../../packages/Table/types';

// @ts-ignore
@Component({ name: 'AttributeTable' })
export default class AttributeTable extends Vue {
  // @ts-ignore
  @Prop({ type: String, default: 'attribute' }) readonly type!:
    | 'attribute'
    | 'event';

  // @ts-ignore
  @Prop({ type: Array, default: () => [] }) readonly data!: IData[];

  public attributeColumns: IColumn[] = [
    { label: '属性名', prop: 'name', align: 'left' },
    { label: '说明', prop: 'dec', align: 'left' },
    { label: '类型', prop: 'type', customRender: 'type', align: 'left' },
    { label: '默认值', prop: 'default', customRender: 'def', align: 'left' },
  ];

  public eventColumns: IColumn[] = [
    { label: '事件名', prop: 'name', align: 'left' },
    { label: '说明', prop: 'dec', align: 'left' },
    { label: '类型', prop: 'type', customRender: 'type', align: 'left' },
  ];

  public get columns(): IColumn[] {
    return this.type === 'attribute'
      ? this.attributeColumns
      : this.eventColumns;
  }

  public showTips(cellValue: string) {
    const enumVal = cellValue.split(':')[1];
    return enumVal
      .split('|')
      .map((i) => {
        return `'${i}'`;
      })
      .join(' | ');
  }

  public showFunc(cellValue: string) {
    return cellValue.slice(cellValue.indexOf('Function:'));
  }

  public handleOpen(url: string) {
    open(url, '_blank');
  }
}
</script>

<style lang="scss" scoped>
.attribute-table {
  margin: 1rem 0;

  ::v-deep table {
    margin: 0;
  }

  ::v-deep th,
  ::v-deep tr,
  ::v-deep td {
    border: 0 none;
  }

  .el-link {
    color: #3eaf7c;
  }
}

.tips {
  color: #0c61c9;
  background-color: #f5f7fa;
  padding: 3px 5px;
}
</style>
