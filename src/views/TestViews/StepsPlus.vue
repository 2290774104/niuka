<template>
  <div>
    <steps-plus :active="active" :steps="steps"></steps-plus>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StepsPlus from '@/components/StepsPlus/StepsPlus.vue';

@Component({ name: 'StepsPlusView', components: { StepsPlus } })
export default class StepsPlusView extends Vue {
  public active = 0;

  public steps = [
    { title: '设置基本信息' },
    { title: '设置直播功能' },
    { title: '设置直播详情' },
  ];
}
</script>

<style lang="scss" scoped></style>
