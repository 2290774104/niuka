<script lang="tsx">
import '../style/index.scss';
import type { IInfo, ValueType } from '../types';
import { Component, Emit, Model, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'NiukaSwitch' })
export default class NiukaSwitch extends Vue {
  // v-model 双向绑定
  @Model('change', { type: [Boolean, String, Number], required: true })
  readonly value: ValueType;

  // 按钮信息
  @Prop({ type: Object, required: true }) readonly info!: IInfo;

  // 按钮信息中用作 label 的字段
  @Prop({ type: String, default: 'label' }) readonly labelKey!: string;

  // switch 打开时的背景色
  @Prop({ type: String, default: '#13ce66' }) readonly activeColor!: string;

  // switch 关闭时的背景色
  @Prop({ type: String, default: '#cccccc' }) readonly inactiveColor!: string;

  // 是否显示备注区域
  @Prop({ type: Boolean, default: false }) readonly showRemark!: boolean;

  // 是否在备注区域显示编辑按钮
  @Prop({ type: Boolean, default: false }) readonly userEdit!: boolean;

  // 是否显示排序号
  @Prop({ type: Boolean, default: false }) readonly showSort!: boolean;

  // 按钮信息中用在排序的字段
  @Prop({ type: String, default: 'sort' }) readonly sortKey!: string;

  // 更新 v-model
  @Emit('change')
  private handleChange(value: ValueType) {
    return value;
  }

  // 点击编辑按钮
  @Emit('edit')
  private handleEdit() {
    return this.info;
  }

  render() {
    return (
      <div class="niuka-switch">
        {this.showSort && (
          <div class="switch-sort">{this.info[this.sortKey]}</div>
        )}
        <div class="switch-info">
          {this.info[this.labelKey]}
          <el-switch
            value={this.value}
            {...{
              props: {
                activeValue: this.info.activeValue,
                inactiveValue: this.info.inactiveValue,
                activeColor: this.activeColor,
                inactiveColor: this.inactiveColor,
              },
            }}
            {...{
              on: {
                change: this.handleChange,
              },
            }}
          ></el-switch>
        </div>
        {this.showRemark && (
          <div class="switch-remark">
            <div class="remark-slot">{this.$slots.remark}</div>
            {this.userEdit && (
              <i class="el-icon el-icon-edit" onClick={this.handleEdit}></i>
            )}
          </div>
        )}
      </div>
    );
  }
}
</script>

<style lang="scss" scoped></style>
