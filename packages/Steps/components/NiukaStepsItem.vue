<script lang="tsx">
import type { IStepItem } from '../types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'StepsItem' })
export default class StepsItem extends Vue {
  @Prop({ type: Object, required: true }) readonly step!: IStepItem;

  @Prop({ type: Number, required: true }) readonly space!: number;

  public get miidStyle() {
    return {
      width: `${this.space}px`,
    };
  }

  render() {
    return (
      <div class="steps-item">
        <div class={['steps-icon', this.step.status, this.step.icon]}></div>
        <div class="steps-title">{this.step.title}</div>
        {this.step.isLast ? null : (
          <div class="steps-mid" style={this.miidStyle}></div>
        )}
      </div>
    );
  }
}
</script>
