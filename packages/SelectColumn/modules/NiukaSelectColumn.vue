<script lang="tsx">
import {
  Component,
  Emit,
  Model,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import NiukaSelectTree from '../../SelectTree';
import type { INetWork } from '../types';
import type { TreeData } from 'element-ui/types/tree';
import { Message } from 'element-ui';

interface IData {
  catid: string;
  name: string;
  children?: IData[];
  [key: string]: any;
}

interface IOption {
  value: string;
  label: string;
}

@Component({ name: 'NiukaSelectColumn', components: { NiukaSelectTree } })
export default class NiukaSelectColumn extends Vue {
  // v-model 双向绑定
  @Model('change', { type: String, required: true })
  readonly value: string;

  @Emit('change')
  updateValue(val: string) {
    return val;
  }

  @Watch('selected')
  selectedChange(newVal: string) {
    this.updateValue(newVal);
  }

  @Prop({ type: Object, required: true }) private readonly netWork!: INetWork;

  // 远程查询取值字段
  @Prop({ type: String, default: 'data' })
  private readonly resultField!: string;

  // 是否记录常用项
  @Prop({ type: Boolean, default: true })
  private readonly recently!: boolean;

  private selected: string = '';

  private get tree(): NiukaSelectTree {
    return this.$refs.tree as NiukaSelectTree;
  }

  private treeData: TreeData[] = [];

  private async getTreeData() {
    try {
      if (this.netWork.method) {
        const res = await this.netWork.method(this.netWork.params);
        this.treeData = this.initData(res[this.resultField]);
      }
    } catch (error) {
      Message.error(error);
    }
  }

  private initData(data: IData[]): TreeData[] {
    return data.map((i) => {
      return {
        id: i.catid,
        label: i.name,
        children: i.children ? this.initData(i.children) : [],
        disabled: i.children && i.children.length > 0,
      };
    });
  }

  private recentlyOptions: IOption[] = [];

  private getRecentlyOptions() {
    let count = localStorage.getItem('recently_count');
    if (!count) {
      localStorage.setItem('recently_count', '5');
      count = '5';
    }
    let selectree = localStorage.getItem('recently_selectree');
    if (!selectree) {
      localStorage.setItem('recently_selectree', '[]');
      selectree = '[]';
    }
    this.recentlyOptions = JSON.parse(selectree).map((i) => {
      return {
        value: i.id,
        label: i.name,
      };
    });
  }

  created() {
    this.getTreeData();
    this.getRecentlyOptions();
  }

  private handleSelected(data: TreeData | string) {
    if (data) {
      this.$nextTick(() => {
        const id = typeof data === 'string' ? data : data.id;
        this.tree.setCheckedKeys([id]);
      });
    }
    if (data && typeof data !== 'string' && this.recently) {
      const count = localStorage.getItem('recently_count') || '5';
      // 判断勾选项是否已在常用选中
      if (this.recentlyOptions.find((i) => i.value === data.id)) return;
      // 如果常用选项中的数量达到上限，则移除最早的选项
      while (this.recentlyOptions.length >= Number(count)) {
        this.recentlyOptions.shift();
      }
      this.recentlyOptions.push({
        value: data.id,
        label: data.label,
      });
      localStorage.setItem(
        'recently_selectree',
        JSON.stringify(
          this.recentlyOptions.map((o) => {
            return {
              id: o.value,
              name: o.label,
            };
          })
        )
      );
    }
  }

  render() {
    const renderRecently = (options: IOption[]) => {
      return options.length > 0 ? (
        <el-option-group label="常用">
          {options.map((o) => {
            return <el-option label={o.label} value={o.value}></el-option>;
          })}
        </el-option-group>
      ) : (
        ''
      );
    };
    return (
      <niuka-select-tree
        ref="tree"
        v-model={this.selected}
        data={this.treeData}
        select-leaf
        filter-hide={this.recentlyOptions.map((o) => o.value)}
        {...{ on: { selected: this.handleSelected } }}
      >
        {this.recently ? (
          <template slot="before">
            {renderRecently(this.recentlyOptions)}
            <el-option-group label="全部"></el-option-group>
          </template>
        ) : (
          ''
        )}
      </niuka-select-tree>
    );
  }
}
</script>
