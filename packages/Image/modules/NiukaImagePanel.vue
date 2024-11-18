<script lang="tsx">
import '../styles/panel.scss';
import { IInfo, Operation, IRenderOperation } from '../types';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'NiukaImagePanel' })
export default class NiukaImagePanel extends Vue {
  @Prop({ type: Object, required: true }) private readonly info!: IInfo;

  @Prop({ type: String, default: 'url' }) private readonly urlKey!: string;

  @Prop({ type: String, default: 'title' }) private readonly titleKey!: string;

  @Prop({ type: Array, default: () => ['preview', 'edit'] })
  private readonly operation!: Operation[];

  @Emit('edit')
  private handleEdit(): IInfo {
    return this.info;
  }

  @Emit('delete')
  private handleDelete(): IInfo {
    return this.info;
  }

  render() {
    return (
      <div class="niuka-image-panel">
        <div class="mark">
          <p class="mark-title">{this.info[this.titleKey]}</p>
          {this.operation.includes('edit') ? (
            <i class="el-icon el-icon-edit" onClick={this.handleEdit}></i>
          ) : (
            ''
          )}
        </div>
        {this.operation.includes('delete') ? (
          <div class="delete" onClick={this.handleDelete}>
            <i class="el-icon el-icon-error default"></i>
            <i class="el-icon el-icon-circle-close hover"></i>
          </div>
        ) : (
          ''
        )}
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
