<script lang="tsx">
import { StyleValue } from 'vue';
import '../style/index.scss';
import { findNearNum } from '../../utils';
import type { IAnchor } from '../types';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({ name: 'NiukaAnchor' })
export default class NiukaAnchor extends Vue {
  // 手动配置锚点
  @Prop({ type: Array, default: () => [] }) readonly anchorLinks!: IAnchor[];

  // 自动生成锚点容器筛选条件
  @Prop({ type: String, default: '.sub-title' }) readonly query!: string;

  // 是否固定到屏幕
  @Prop({ type: Boolean, default: true }) readonly fixed!: boolean;

  // 生成容器宽度，最大不超过 300px
  @Prop({ type: [String, Number], default: '' }) readonly width!:
    | string
    | number;

  // fixed 时生效，同定位中的 top
  @Prop({ type: String, default: '120px' }) readonly top!: string;

  // fixed 时生效，同定位中的 right
  @Prop({ type: String, default: '0px' }) readonly right!: string;

  private anchorList: IAnchor[] = [];

  private getAnchorList() {
    const navs: IAnchor[] = [];
    document.querySelectorAll(this.query).forEach((el: HTMLElement, i) => {
      if (el.id) {
        navs.push({
          index: i,
          label: el.innerText,
          link: el.id,
        });
      }
    });
    return this.anchorLinks.length > 0
      ? this.anchorLinks.map((o, i) => {
          return {
            ...o,
            index: i,
          };
        })
      : navs;
  }

  private active = 0;

  private abbreviate = false;

  private handleAbbreviate() {
    this.abbreviate = !this.abbreviate;
  }

  @Watch('list', { deep: true, immediate: true })
  listChange(newVal) {
    console.log(newVal);
  }

  private handleClickItem(item: IAnchor) {
    scrollTo({
      top: (document.querySelector(`#${item.link}`) as HTMLElement).offsetTop,
      behavior: 'smooth',
    });
  }

  private handleScroll() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const tops = this.anchorList.map((i) => {
      return (document.querySelector(`#${i.link}`) as HTMLElement).offsetTop;
    });
    const near = findNearNum(tops, scrollTop);
    this.active = tops.indexOf(near);
  }

  private get anchorWidth() {
    if (this.width) {
      if (typeof this.width === 'string') {
        const width = parseInt(this.width);
        if (Object.is(width, NaN)) {
          return 'unset';
        }
        return `${parseInt(this.width)}px`;
      }
      return `${this.width}px`;
    } else {
      return 'unset';
    }
  }

  private get style(): StyleValue {
    return {
      position: this.fixed ? 'fixed' : 'relative',
      width: this.anchorWidth,
      top: this.fixed ? this.top : 'unset',
      right: this.fixed ? this.right : 'unset',
    };
  }

  created() {
    this.anchorList = this.getAnchorList();
    addEventListener('scroll', this.handleScroll);
    this.$nextTick(() => {
      this.anchorList = this.getAnchorList();
    });
  }

  render() {
    const renderStep = (anchorLinks: IAnchor[]) =>
      anchorLinks.map((o) => {
        return (
          <el-step>
            <div
              class="link"
              slot="title"
              onClick={() => this.handleClickItem(o)}
            >
              {!this.abbreviate && o.label}
            </div>
          </el-step>
        );
      });
    return (
      <div
        class={{ 'niuka-anchor': true, abbreviate: this.abbreviate }}
        style={this.style}
      >
        <div class="abbreviate-icon" onClick={this.handleAbbreviate}>
          <i
            class={{
              'el-icon-caret-left': this.abbreviate,
              'el-icon-caret-right': !this.abbreviate,
            }}
          ></i>
        </div>
        <el-steps direction="vertical" active={this.active} space={40}>
          {renderStep(this.anchorList)}
        </el-steps>
      </div>
    );
  }
}
</script>
