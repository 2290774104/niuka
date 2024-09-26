<template>
  <div class="steps-plus">
    <steps-item
      v-for="(item, index) in stepsList"
      :key="index"
      :step="item"
      :space="space"
    />
  </div>
</template>

<script lang="ts">
import StepsItem from './StepsItem.vue';
import { PropType } from 'vue';

declare interface IStep {
  title: string;
  icon?: string;
}

declare interface IStepItem extends IStep {
  icon: string;
  isLast: boolean;
  status: 'process' | 'success' | 'wait';
}

export default {
  name: 'StepsPlus',
  components: { StepsItem },
  props: {
    active: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array as PropType<IStep[]>,
      required: true,
    },
    space: {
      type: Number,
      default: 154,
    },
  },
  data() {
    return {
      defaultIcon: ['filter', 'edit', 'setting'],
    };
  },
  computed: {
    stepsList(): IStepItem[] {
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
    },
  },
};

export type { IStep, IStepItem };
</script>

<style lang="scss" scoped>
.steps-plus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: url('./image/StepsPlus/topic-bg.png') no-repeat center;
  color: #2293e6;
}
</style>
