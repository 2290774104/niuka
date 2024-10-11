<script lang="tsx">
import '../styles/index.scss';
import { omit } from 'lodash';
import PagStore from '../store';
import { CreateElement } from 'vue';
import '../directive/height-adaptive';
import { isBoolean, isObject, uuid } from '../../utils';
import type { Table, TableColumn } from 'element-ui';
import type { IColumn, IData, IPagination } from '../types';
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({ name: 'NiukaTable' })
export default class NiukaTable extends Vue {
  // 数据相关
  @Prop({ type: Array, required: true }) readonly data!: IData[];

  // 表格每列配置项
  @Prop({ type: Array, required: true }) readonly columns!: IColumn[];

  // 分页配置
  @Prop({ type: [Boolean, Object], default: false }) readonly pagination!:
    | boolean
    | IPagination;

  @Prop({ type: Number, default: 0 }) readonly total!: number;

  // 是否在数据重渲染后自动滚动到顶部
  @Prop({ type: Boolean, default: true }) readonly autoToTop?: boolean;

  @Prop({ type: [Number, String], default: '' }) readonly height?:
    | number
    | string;

  private get tableInstance() {
    return this.$refs.ElTableRef as Table | any;
  }

  private get tableBodyWrapper() {
    return this.tableInstance.bodyWrapper as HTMLElement;
  }

  // 是否展示分页
  private isShowPag: boolean = false;

  // 默认分页配置
  private defPagination: IPagination = {
    currentPage: 1,
    pageSizes: [10, 20, 30, 50],
    pageSize: 10,
    layout: 'prev, pager, next, sizes, total',
    background: true,
  };

  @Watch('pagination', { deep: true, immediate: true })
  public onPaginationChanged(pagination: boolean | IPagination) {
    if (isBoolean(pagination)) {
      this.isShowPag = pagination as boolean;
    }
    if (isObject(pagination)) {
      this.isShowPag = true;
      Object.assign(this.defPagination, pagination);
      const { pageSize, currentPage } = this.defPagination;
      PagStore.setPageSize(pageSize);
      PagStore.setCurrentPage(currentPage);
    }
  }

  private pageSizeChange(pageSize: number): void {
    PagStore.setPageSize(pageSize);
    this.emitPageChangeEvent();
  }

  private currentChange(currentPage: number): void {
    PagStore.setCurrentPage(currentPage);
    this.emitPageChangeEvent();
  }

  private handlePrevClick() {
    PagStore.setCurrentPage(PagStore.currentPage - 1);
    this.emitPageChangeEvent();
  }

  private handleNextClick() {
    PagStore.setCurrentPage(PagStore.currentPage + 1);
    this.emitPageChangeEvent();
  }

  @Emit('page-change')
  private emitPageChangeEvent() {
    if (this.autoToTop) {
      this.tableBodyWrapper.scrollTop = 0;
    }
    return {
      pageSize: PagStore.pageSize,
      currentPage: PagStore.currentPage,
    };
  }

  directives() {
    return [
      {
        name: 'height-adaptive',
        value: {
          height: this.height,
          bottomOffset: 42,
        },
      },
    ];
  }

  created() {
    console.log(this.height);
  }

  render(h: CreateElement) {
    // 移除表格高度，表格高度使用指令计算，避免高度冲突
    const attrs = omit(this.$attrs, ['height']);
    // 移除分页事件，防止事件冲突
    const $tableListeners = omit(this.$listeners, [
      'page-change',
      'current-change',
      'size-change',
      'prev-click',
      'next-click',
    ]);
    const customScopedSlots = omit(this.$scopedSlots, []);

    const getCellValue = (column, row) => {
      const { prop } = column;
      const value = row[prop];
      return value;
    };

    const renderColumns = (columns: IColumn[]) =>
      columns
        .filter((i) => !i.hidden)
        .map((o) => {
          const props = Object.assign(
            {
              align: 'center',
            },
            o
          );
          const scopedSlots = {
            default({
              row,
              column: elColumn,
              $index,
              store,
              _self,
            }: {
              row: any;
              column: TableColumn;
              $index: number;
              store: any;
              _self: any;
            }) {
              const column = Object.assign({ scopedSlots: {} }, o, elColumn);
              const cellValue = getCellValue(column, row);
              let cellContent = cellValue;
              const customRender =
                customScopedSlots[column.customRender] ||
                customScopedSlots[column.scopedSlots.customRender];
              if (customRender) {
                cellContent = customRender({
                  cellValue,
                  row,
                  column,
                  $index,
                  store,
                  _self,
                  h,
                });
              }

              return cellContent;
            },
          };
          const sampleScopedSlots = { scopedSlots };
          return (
            <el-table-column
              key={uuid()}
              {...{ props: props }}
              {...sampleScopedSlots}
            ></el-table-column>
          );
        });

    return (
      <div class="niuka-table">
        <el-table
          ref="ElTableRef"
          data={this.data}
          {...{ props: attrs, on: $tableListeners }}
          {...{ directives: this.directives() }}
        >
          {renderColumns(this.columns)}
        </el-table>
        {this.isShowPag && (
          <el-pagination
            {...{ props: this.defPagination }}
            total={this.total}
            {...{
              on: {
                'size-change': this.pageSizeChange,
                'current-change': this.currentChange,
                'prev-click': this.handlePrevClick,
                'next-click': this.handleNextClick,
              },
            }}
          ></el-pagination>
        )}
      </div>
    );
  }
}
</script>
