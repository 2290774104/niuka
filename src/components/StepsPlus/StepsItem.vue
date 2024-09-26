<template>
  <div class="steps-item">
    <div class="steps-icon" :class="[step.status, step.icon]"></div>
    <div class="steps-title">
      {{ step.title }}
    </div>
    <div class="steps-mid" :style="miidStyle" v-if="!step.isLast"></div>
  </div>
</template>

<script lang="ts">
import type { IStepItem } from './StepsPlus.vue';
import { PropType } from 'vue';
export default {
  props: {
    step: {
      type: Object as PropType<IStepItem>,
      required: true,
    },
    space: {
      type: Number,
      required: true,
    },
  },
  computed: {
    miidStyle() {
      return {
        width: `${this.space}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$statusList: wait success process;
$icons: filter edit setting;

.steps-item {
  display: flex;
  align-items: center;

  .steps-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }

  @each $status in $statusList {
    .#{$status} {
      @each $icon in $icons {
        &.#{$icon} {
          background: url('./image/StepsPlus/steps-#{$icon}-#{$status}.png')
            no-repeat
            center;
        }
      }
    }
  }

  .steps-title {
    line-height: 32px;
  }

  .steps-mid {
    margin: 0 13px 0 22px;
    width: 154px;
    height: 1px;
    border-top: 2px dashed #2293e6;
    opacity: 0.3;
  }
}
</style>
