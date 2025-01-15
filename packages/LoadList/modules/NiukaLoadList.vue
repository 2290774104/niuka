<script lang="tsx">
import '../styles/index.scss';
import { Component, Emit, Model, Prop, Vue } from 'vue-property-decorator';
@Component({ name: 'NiukaLoadList' })
export default class NiukaLoadList extends Vue {
  // v-model 双向绑定
  @Model('page-change', { type: Number, required: true })
  readonly value: number;

  // 更新 v-model
  @Emit('page-change')
  private handleChange(value: number) {
    return value;
  }

  @Prop({ type: Array, default: () => [] }) private readonly list!: any[];

  @Prop({ type: Boolean }) private readonly loading!: boolean;

  @Prop({ type: Boolean }) private readonly finish!: boolean;

  private handleScroll(event: Event) {
    const container = event.target as HTMLElement;
    const scrollTop = container.scrollTop; // 已滚动距离
    const scrollHeight = container.scrollHeight; // 滚动内容高度
    const clientHeight = container.clientHeight; // 可视区域高度

    // 如果滚动到底部，并且没有在加载中
    if (scrollTop + clientHeight >= scrollHeight - 30 && !this.loading) {
      this.handleChange(this.value + 1);
    }
  }

  render() {
    const renderItem = (list: any[]) =>
      list.map((item) => {
        return this.$scopedSlots.item && this.$scopedSlots.item(item);
      });

    return (
      <div class="niuka-load-list" onScroll={this.handleScroll}>
        {renderItem(this.list)}
        {this.loading ? (
          <div class="loading">
            <i class="el-icon-loading"></i>加载中...
          </div>
        ) : (
          <div class="end">
            {this.finish ? '没有更多内容了' : '下拉加载更多'}
          </div>
        )}
      </div>
    );
  }
}
</script>
