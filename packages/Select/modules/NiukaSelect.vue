<script lang="tsx">
import { omit } from 'lodash';
import '../directive/load-more';
import {
  Component,
  Emit,
  Model,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import type {
  ValueType,
  IOptionAttrs,
  INetWork,
  IOption,
  params,
} from '../types';

interface IParams {
  [key: string]: any;
}

@Component({ name: 'NiukaSelect' })
export default class NiukaSelect extends Vue {
  // v-model 双向绑定
  @Model('model-change', { type: [String, Number, Array], required: true })
  private readonly value!: ValueType;

  // 更新 v-model
  @Emit('model-change')
  private updateValue(value: ValueType): ValueType {
    return value;
  }

  // option 配置
  @Prop({
    type: Object,
    default: () => ({ value: 'value', label: 'label' }),
  })
  private readonly optionAttrs!: IOptionAttrs;

  // 下拉框数据类型   default - 默认(options)  custom - 自定义接口
  @Prop({ type: String, default: 'default' }) private readonly dataType!:
    | 'default'
    | 'custom';

  // dataType 为 custom 时，接口请求配置
  @Prop({ type: Object, default: () => ({}) })
  private readonly netWork!: INetWork<IParams>;

  // 下拉数据选项，默认使用options字段中的数据作为下拉选项数据源
  @Prop({ type: Array, default: () => [] })
  private readonly options!: IOption[];

  // 选择框宽度
  @Prop({ type: [String, Number], default: '100%' }) private readonly width!:
    | string
    | number;

  // 是否懒加载（即带分页参数）
  @Prop({ type: Boolean, default: false }) private readonly lazy!: boolean;

  // 懒加载单页数据条数
  @Prop({ type: Number, default: 10 }) private readonly pageSize!: number;

  // 是否开始加载
  @Prop({ type: Boolean, default: true }) private readonly load!: boolean;

  // 关键字远程查询字段
  @Prop({ type: String, default: 'name' })
  private readonly filterField!: string;

  // 分页字段
  @Prop({ type: String, default: 'page' })
  private readonly pageField!: string;

  @Prop({ type: String, default: 'size' })
  private readonly sizeField!: string;

  // 远程查询取值字段
  @Prop({ type: String, default: 'data' })
  private readonly resultField!: string;

  get getOptions(): IOption[] {
    return this.dataType === 'custom' ? this.apiOptions : this.options;
  }

  @Watch('netWork', { immediate: true, deep: true })
  netWorkChange() {
    this.apiOptions = [];
    this.pageNo = 1;
    this.getOption();
  }

  private apiOptions: IOption[] = [];

  private pageNo = 1;

  private name = '';

  private async getOption() {
    if (!this.load) {
      this.apiOptions = [];
      return;
    }
    try {
      if (this.dataType === 'custom') {
        const params: params<IParams> =
          (this.netWork.params as params<IParams>) || {};
        if (this.lazy) {
          params[this.filterField] = this.name;
          params[this.pageField] = this.pageNo;
          params[this.sizeField] = this.pageSize;
        }
        const res = await this.netWork.method(params);
        if (!this.lazy) {
          this.apiOptions = [];
        }
        this.apiOptions = this.apiOptions.concat(res[this.resultField]);
        this.updataOption(this.apiOptions);
      }
    } catch (err) {
      console.log(err);
    }
  }

  @Emit('updata-option')
  private updataOption(options: IOption[]): IOption[] {
    return options;
  }

  // 重写 el-select change 事件，更新 v-model 绑定值
  @Emit('change')
  private selectChange(value: ValueType) {
    this.updateValue(value);
    return {
      value: value,
      options: this.getOptions,
    };
  }

  private loadMore() {
    if (!this.lazy) return;
    this.pageNo += 1;
    this.getOption();
  }

  // 输入查询条件
  private filterMethod(name: string) {
    this.name = name;
    this.apiOptions = [];
    this.pageNo = 1;
    this.getOption();
  }

  // 动态设置 select 宽度
  get selectStyle() {
    return {
      width: typeof this.width === 'string' ? this.width : `${this.width}px`,
    };
  }

  render() {
    const props = omit(this.$attrs, [
      'optionAttrs',
      'dataType',
      'options',
      'kind',
      'lazy',
      'pageSize',
      'filter-method',
      'filterField',
    ]);
    const selectListeners = omit(this.$listeners, ['model-change', 'change']);

    const renderOption = (options: IOption[]) =>
      options
        .filter((i: IOption) => !i.hidden)
        .map((i: IOption) => {
          return (
            <el-option
              key={i[this.optionAttrs.value]}
              value={i[this.optionAttrs.value]}
              label={i[this.optionAttrs.label]}
              disabled={i.disabled}
            ></el-option>
          );
        });

    return (
      <el-select
        class="niuka-select"
        value={this.value}
        v-load-more={this.loadMore}
        {...{ props: props, on: selectListeners }}
        onChange={this.selectChange}
        filter-method={this.lazy ? this.filterMethod : null}
        style={this.selectStyle}
      >
        {renderOption(this.getOptions)}
      </el-select>
    );
  }
}
</script>
