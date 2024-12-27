<script lang="tsx">
import '../styles/index.scss';
import '../directive/height-adaptive'
import { omit } from 'lodash';
import PagStore from '../store';
import { CreateElement } from 'vue';
import type { IData, IPagination } from '../types';
import { isBoolean, isObject, uuid } from '../../utils';
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({ name: 'NiukaImageList' })
export default class NiukaImageList extends Vue {
  // 数据相关
  @Prop({ type: Array, required: true }) readonly data!: IData[];

  // 分页配置
  @Prop({ type: [Boolean, Object], default: false }) readonly pagination!:
    | boolean
    | IPagination;

  @Prop({ type: Number, default: 0 }) readonly total!: number;

  @Prop({ type: String, default: 'url' }) readonly urlKey!: string

  @Prop({ type: String, default: 'title' }) readonly titleKey!: string

  // 组件高度，默认占满父级容器
  @Prop({ type: [Number, String], default: '' }) readonly height?:
    | number
    | string;

  // 是否展示分页
  private isShowPag: boolean = false;

  // 默认分页配置
  private defPagination: IPagination = {
    currentPage: 1,
    pageSizes: [8, 16, 24, 32],
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
    return {
      pageSize: PagStore.pageSize,
      currentPage: PagStore.currentPage,
    };
  }

  private get previewList() {
    return this.data.map(i => i[this.urlKey])
  }

  directives() {
    return [
      {
        name: 'height-adaptive',
        value: {
          height: this.height,
          bottomOffset: this.isShowPag ? 42 : 0,
        },
      },
    ];
  }

  render(h: CreateElement) {
    const renderList = (list: IData[]) => {
      const renderItem = (data: IData) => {
        return (
          <el-col xs={12} sm={8} md={6}>
            <el-card>
              <el-image src={data[this.urlKey]} fit="contain" lazy preview-src-list={this.previewList}></el-image>
              <div class="title-wrap">
                <div class="title">{data[this.titleKey]}</div>
                <div class="operate">{this.$scopedSlots.operate && this.$scopedSlots.operate(data)}</div>
              </div>
            </el-card>
          </el-col>
        );
      };

      return <el-row gutter={20} {...{ directives: this.directives() }}>{list.map((i) => renderItem(i))}</el-row>;
    };

    const renderEmpty = () => <el-empty description="暂无数据" {...{ directives: this.directives() }} />

    return (
      <div class="niuka-image-list">
        {this.data.length ? renderList(this.data) : renderEmpty()}
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
