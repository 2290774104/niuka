<script lang="tsx">
import '../styles/card.scss';
import { IInfo, Operation, IRenderOperation } from '../types';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'NiukaImageCard' })
export default class NiukaImageCard extends Vue {
  @Prop({ type: Object, required: true }) private readonly info!: IInfo;

  @Prop({ type: String, default: 'url' }) private readonly urlKey!: string;

  @Prop({ type: Array, default: () => ['preview', 'edit'] })
  private readonly operation!: Operation[];

  private renderMethods: IRenderOperation = {
    preview: this.renderPreview,
    edit: this.renderEdit,
    delete: this.renderDelete,
  };

  private renderPreview() {
    return <i class="el-icon el-icon-zoom-in" onClick={this.handlePreview}></i>;
  }

  private renderEdit() {
    return <i class="el-icon el-icon-edit" onClick={this.handleEdit}></i>;
  }

  private renderDelete() {
    return <i class="el-icon el-icon-circle-close" onClick={this.handleDelete}></i>;
  }

  // 图片预览
  private handlePreview() {
    const img = this.$el.querySelector('img');
    img && img.click();
  }

  @Emit('edit')
  private handleEdit(): IInfo {
    return this.info;
  }

  @Emit('delete')
  private handleDelete(): IInfo {
    return this.info;
  }

  render() {
    const renderOperation = (operation: Operation[]) =>
      operation.map((o) => {
        return this.renderMethods[o]();
      });

    return (
      <div class="niuka-image-card">
        <div class="mark">{renderOperation(this.operation)}</div>
        <el-image
          src={this.info[this.urlKey]}
          fit="contain"
          preview-src-list={[this.info[this.urlKey]]}
        ></el-image>
      </div>
    );
  }
}
</script>
