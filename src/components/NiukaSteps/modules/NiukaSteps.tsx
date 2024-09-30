import '../styles/index.scss';
import { CreateElement } from 'vue';
import type { IStep, IStepItem } from '../types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import NiukaStepsItem from '../components/NiukaStepsItem';
@Component({ name: 'NiukaSteps', components: { NiukaStepsItem } })
export default class NiukaSteps extends Vue {
  @Prop({ type: Number, required: true }) readonly active!: number;

  @Prop({ type: Array, required: true }) readonly steps!: IStep[];

  @Prop({ type: Number, default: 154 }) readonly space!: number;

  private defaultIcon = ['filter', 'edit', 'setting'];

  public get stepsList(): IStepItem[] {
    return this.steps.map((item: IStep, index) => {
      return {
        ...item,
        icon: item.icon || this.defaultIcon[index],
        isLast: index === this.steps.length - 1,
        status:
          this.active === index
            ? 'process'
            : this.active > index
            ? 'success'
            : 'wait',
      };
    });
  }

  render(h: CreateElement) {
    const renderItem = (stepsList: IStepItem[]) =>
      stepsList.map((i) => {
        return (
          <niuka-steps-item step={i} space={this.space}></niuka-steps-item>
        );
      });

    return <div class="steps-plus">{renderItem(this.stepsList)}</div>;
  }
}
