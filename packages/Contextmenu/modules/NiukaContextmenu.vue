<script lang="tsx">
import '../styles/index.scss';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import type { IMenu } from '../types';
import { StyleValue } from 'vue';
@Component({ name: 'NiukaContextmenu' })
export default class NiukaContextmenu extends Vue {
  @Prop({ type: Array, required: true }) readonly menus!: IMenu[];

  @Prop({ type: String, default: '.carrier' }) readonly carrier!: string;

  private show = false;

  // 更新 v-model
  @Emit('change')
  private handleChange(value: boolean) {
    this.show = value;
    return value;
  }

  private get style(): StyleValue {
    return {
      display: this.show ? 'block' : 'none',
      top: `${this.axisY}px`,
      left: `${this.axisX}px`,
    };
  }

  private get carrierEl(): HTMLElement {
    return document.querySelector(this.carrier);
  }

  mounted() {
    this.carrierEl.addEventListener('contextmenu', this.setAxis);
    document.addEventListener('click', this.handleClose);
  }

  beforeDestroy() {
    this.carrierEl.removeEventListener('contextmenu', this.setAxis);
    document.removeEventListener('click', this.handleClose);
  }

  private axisX = 0;

  private axisY = 0;

  private setAxis(e: PointerEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.handleChange(true);
    this.axisX = e.clientX;
    this.axisY = e.clientY;
  }

  private handleClose() {
    this.handleChange(false);
  }

  @Emit('event')
  private triggerEvent(event: string) {
    return this.menus.find((i) => i.event === event);
  }

  private handleSelect(index: string) {
    this.triggerEvent(index);
  }

  render() {
    const renderMenu = (menus: IMenu[]) =>
      menus.map((i) => {
        return (
          <el-menu-item index={i.event}>
            {i.icon ? <i class={i.icon}></i> : ''}
            <span slot="title">{i.title}</span>
          </el-menu-item>
        );
      });

    return (
      <div class="niuka-contextmenu" style={this.style}>
        {this.show ? (
          <el-menu
            {...{
              on: {
                select: this.handleSelect,
              },
            }}
          >
            {renderMenu(this.menus)}
          </el-menu>
        ) : (
          ''
        )}
      </div>
    );
  }
}
</script>
