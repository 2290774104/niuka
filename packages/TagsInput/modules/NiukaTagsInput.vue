<script lang="tsx">
import '../styles/index.scss';
import { StyleValue } from 'vue';
import { trimAll, isNumeric } from '../../utils';
import {
  Component,
  Emit,
  Model,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import { Message, MessageBox } from 'element-ui';

@Component({ name: 'NiukaTagsInput' })
export default class NiukaTagsInput extends Vue {
  // v-model 双向绑定
  @Model('change', { type: String, required: true })
  readonly value: string;

  // 更新 v-model
  @Emit('change')
  private handleChange(value: string) {
    return value;
  }

  @Watch('value', { immediate: true })
  valueChange(newVal: string) {
    if (newVal !== this.tags.join(' ')) {
      if (this.value.length > 0) {
        this.tags = newVal.trim().split(' ');
      } else {
        this.tags = [];
      }
    }
  }

  @Prop({ type: Boolean, default: false })
  private readonly checkNumber!: boolean;

  @Prop({ type: Number }) private readonly limit!: number | undefined;

  @Prop({ type: Boolean, default: false }) private readonly noInput!: boolean;

  @Prop({ type: Boolean, default: false }) private readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false }) private readonly removeDialog!: boolean;

  @Prop({ type: String, default: '确认删除标签吗？' }) private readonly removeTips!: string;

  private get inputStyle(): StyleValue {
    return {
      width: `${this.inputValue.length * 12 + 50}px`,
    };
  }

  private tags: string[] = [];

  private isActive: boolean = false;

  private inputValue: string = '';

  private handleAddTag(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.addTag(this.inputValue);
    } else if (e.key === 'Backspace') {
      // 按删除键
    }
  }

  public addTags(tags: string | string[]) {
    if (typeof tags === 'string') {
      const tagList = tags.trim().split(' ');
      tagList.forEach((tag: string) => {
        this.addTag(tag, false);
      });
    } else {
      tags.forEach((tag: string) => {
        this.addTag(tag, false);
      });
    }
  }

  private addTag(text: string, showTips: boolean = true) {
    if (!!text) {
      text = trimAll(text);
      // 纯数字标签校验
      if (isNumeric(text) && this.checkNumber) {
        if (showTips) Message.error('标签不能为纯数字！');
        this.inputValue = '';
        return;
      }
      // 标签个数校验
      if (this.limit && this.tags.length >= this.limit) {
        if (showTips) Message.error(`最多添加${this.limit}个标签！`);
        this.inputValue = '';
        return;
      }
      // 标签重复校验
      if (this.tags.length > 0 && this.tags.includes(text)) {
        if (showTips) Message.error('请勿添加重复标签！');
        this.inputValue = '';
        return;
      }
      this.tags.push(text);
      this.inputValue = '';
      this.handleChange(this.tags.join(' '));
    }
  }

  private handleRemove(span: string) {
    if (this.removeDialog) {
      MessageBox.confirm(this.removeTips, '提示', {
        confirmButtonText: '是',
          cancelButtonText: '否',
          type: 'warning'
      }).then(() => {
        this.removeTag(span)
      }).catch(() => {});
    } else {
      this.removeTag(span)
    }
    
  }

  private removeTag(span: string) {
    const index = this.tags.indexOf(span);
    this.tags.splice(index, 1);
    this.handleChange(this.tags.join(' '));
  }

  private get inputTag(): HTMLElement {
    return this.$refs.inputTag as HTMLElement;
  }

  render() {
    const renderTags = (tags: string[]) =>
      tags.map((i) => {
        return (
          <div class="span-box">
            <span class="tag-span">{i}</span>
            {!this.disabled && (
              <i
                class="el-icon-close"
                {...{ on: { click: () => this.handleRemove(i) } }}
              ></i>
            )}
          </div>
        );
      });

    return (
      <div
        class={['niuka-tags-input', this.isActive ? 'active' : '']}
        {...{
          on: {
            click: () => {
              if (this.inputTag) this.inputTag.focus();
            },
          },
        }}
      >
        {renderTags(this.tags)}
        {!this.noInput && !this.disabled && (
          <input
            placeholder="输入后按<回车>创建"
            type="text"
            ref="inputTag"
            class="input-tag"
            style={this.inputStyle}
            v-model={this.inputValue}
            {...{
              on: {
                focus: () => {
                  this.isActive = true;
                },
                blur: () => {
                  this.isActive = false;
                },
                keyup: this.handleAddTag,
              },
            }}
          ></input>
        )}
      </div>
    );
  }
}
</script>
