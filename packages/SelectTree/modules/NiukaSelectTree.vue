<script lang="tsx">
import '../styles/index.scss';
import { omit } from 'lodash';
import type { Check, ValueType, IProps } from '../types';
import {
  Component,
  Emit,
  Model,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';

import type { Tree } from 'element-ui';
import type { TreeData } from 'element-ui/types/tree';

@Component({ name: 'NiukaSelectTree' })
export default class NiukaSelectTree extends Vue {
  // v-model 双向绑定
  @Model('change', { type: [String, Number, Array], required: true })
  readonly value: ValueType;

  @Emit('change')
  updateValue(val: ValueType) {
    this.handleSelected(val);
    return val;
  }

  @Emit('selected')
  handleSelected(val: ValueType) {
    return this.treeData.find((i) => i[this.idKey] === val) || val;
  }

  // 监听用于数据回显
  @Watch('value', { immediate: true, deep: true })
  valueChange(newVal: ValueType) {
    if (this.value.toString() !== this.selected.toString()) {
      this.$nextTick(() => {
        const disabledKeys = this.findDisabledKeys(this.data); // 查找所有禁用的节点
        if (this.multiple) {
          const checkedKeys = (newVal as string[]).filter(
            (i) => !disabledKeys.includes(i)
          );
          this.tree.setCheckedKeys(checkedKeys);
          this.updateValue(checkedKeys);
        } else {
          const checkedKey = disabledKeys.includes(newVal as string)
            ? ''
            : (newVal as string);
          this.tree.setCheckedKeys([checkedKey]);
          this.updateValue(checkedKey);
        }
      });
    }
  }

  // 查找所有禁用的节点
  private findDisabledKeys(data: TreeData[]): string[] {
    const disabledKeys = [];
    data.forEach((item) => {
      if (item[this.props.disabled]) {
        disabledKeys.push(item.id.toString());
      }
      if (item[this.props.children] && item[this.props.children].length > 0) {
        disabledKeys.push(...this.findDisabledKeys(item[this.props.children]));
        if (this.selectLeaf) {
          disabledKeys.push(item.id.toString());
        }
      }
    });
    return disabledKeys;
  }

  @Watch('selected', { deep: true })
  selectedChange(newVal: ValueType) {
    this.updateValue(newVal);
  }

  @Prop({ type: Array, default: () => [] }) private readonly data!: TreeData[];

  @Prop({
    type: Object,
    default: () => {
      return {
        id: 'id',
        children: 'children',
        label: 'label',
        disabled: 'disabled',
      };
    },
  })
  private readonly props!: IProps;

  // 是否多选
  @Prop({ type: Boolean, default: false }) private readonly multiple!: boolean;

  // 是否只能勾选子节点(即无子节点的选项)
  @Prop({ type: Boolean, default: false }) private selectLeaf!: boolean;

  // 节点点击时是否选中节点
  @Prop({ type: Boolean, default: true }) private clickToSelected!: boolean;

  // 隐藏域中需要过滤的选项
  @Prop({ type: Array, default: () => [] }) private filterHide!: string[];

  private selected: string | string[] = this.multiple ? [] : '';

  created() {
    this.selected = this.multiple ? [] : '';
  }

  private get idKey(): string {
    return this.props.id;
  }

  private get tree(): Tree {
    return this.$refs.tree as Tree;
  }

  // 节点点击时
  private handleNodeClick(data: TreeData) {
    // 仅可勾选叶子节点时，父节点点击跳过后续勾选逻辑
    if (this.selectLeaf && data.children && data.children.length > 0) {
      return;
    }
    // 不设置点击节点时跳过后续勾选逻辑
    if (!this.clickToSelected) {
      return;
    }
    (this.tree.store as any).nodesMap[data[this.idKey]].expanded = true;
    // 点击节点为非禁用
    // 这里会切换点击节点的勾选状态
    if (!data.disabled) {
      // 点击节点已被选择
      if (this.selected.toString().includes(data[this.idKey].toString())) {
        // 多选时删除该节点
        if (this.multiple) {
          (this.selected as string[]).splice(
            this.selected.indexOf(data[this.idKey]),
            1
          );
          this.tree.setCheckedKeys(this.selected as string[]);
        }
        // 单选时清除选中状态
        else {
          this.tree.setCheckedKeys([]);
          this.selected = '';
        }
      }
      // 点击节点未被勾选
      else {
        this.tree.setCheckedKeys([]);
        this.$nextTick(() => {
          // 多选时将节点添加至勾选列表
          if (this.multiple) {
            (this.selected as string[]).push(data[this.idKey]);
            this.tree.setCheckedKeys(this.selected as string[]);
          }
          // 单选时选中该节点
          else {
            this.tree.setCheckedKeys([data[this.idKey]]);
          }
        });
      }
    }
  }

  // 点击复选框
  private handleCheck(data: TreeData, check: Check) {
    this.tree.setCheckedKeys([]);
    this.$nextTick(() => {
      if (this.multiple) {
        this.tree.setCheckedKeys(check.checkedKeys);
        this.selected = check.checkedKeys;
      } else {
        this.tree.setCheckedKeys([data[this.idKey]]);
        this.selected = data[this.idKey];
      }
    });
  }

  // 选中节点变更时
  private handleCheckChange(data: TreeData, select: boolean) {
    // 将勾选数据生成到隐藏域中，使下拉选择可以回显对应数据
    if (!this.treeData.find((i) => i[this.idKey] === data[this.idKey])) {
      this.treeData.push(data);
    }
    // 保险，选中时再次更新勾选数据
    if (data && select) {
      if (this.multiple) {
        if (!(this.selected as string[]).includes(data[this.idKey])) {
          (this.selected as string[]).push(data[this.idKey]);
        }
      } else {
        this.selected = data[this.idKey];
      }
    }
  }

  // 下拉框输入查询关键字，触发树的过滤
  private filterMethod(val: string) {
    this.handleFilter(val);
    (this.$refs.tree as Tree).filter(val);
  }

  // 更新查询字段
  @Emit('filter')
  handleFilter(value: string): string {
    return value;
  }

  // 根据关键字过滤数据
  private filterNode(value: string, data: TreeData) {
    if (!value) return true;
    return data.label.includes(value);
  }

  private treeData: TreeData[] = [];

  // 多选标签删除时，更新树中勾选节点状态
  private removeTag(val: string) {
    this.tree.setCheckedKeys(this.selected as []);
  }

  public setCheckedKeys(keys: string[]) {
    this.$nextTick(() => {
      this.tree.setCheckedKeys(keys);
    });
  }

  render() {
    const selectAttr = omit(this.$attrs, [
      'data',
      'props',
      'idKey',
      'filter-method',
    ]);

    const selectEvent = omit(this.$listeners, [
      'remove-tag',
      'change',
      'selected',
    ]);

    const renderTreeItem = (data: TreeData[]) =>
      data
        .filter((i) => !this.filterHide.includes(i[this.idKey]))
        .map((i) => {
          return (
            <el-option
              style="display: none;"
              label={i.label}
              value={i[this.idKey]}
            ></el-option>
          );
        });

    return (
      <el-select
        class="niuka-select-tree"
        v-model={this.selected}
        {...{
          props: selectAttr,
          on: {
            ...selectEvent,
            change: this.updateValue,
            'remove-tag': this.removeTag,
          },
        }}
        multiple={this.multiple}
        filter-method={this.filterMethod}
        popper-class="niuka-select-tree-popper"
      >
        {this.$scopedSlots.before && this.$scopedSlots.before({})}
        {this.data.length > 0 ? (
          <el-option class="tree-option" value="tree">
            <el-tree
              ref="tree"
              class={[this.selectLeaf ? 'leaf-tree' : '']}
              data={this.data}
              props={this.props}
              node-key={this.idKey}
              filter-node-method={this.filterNode}
              show-checkbox
              check-strictly
              default-expand-all
              {...{
                on: {
                  'node-click': this.handleNodeClick,
                  check: this.handleCheck,
                  'check-change': this.handleCheckChange,
                },
              }}
            ></el-tree>
          </el-option>
        ) : (
          ''
        )}
        {this.$scopedSlots.after && this.$scopedSlots.after({})}
        {renderTreeItem(this.treeData)}
      </el-select>
    );
  }
}
</script>
