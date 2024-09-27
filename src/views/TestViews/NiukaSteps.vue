<template>
  <div>
    <niuka-steps :active="active" :steps="steps"></niuka-steps>
    <el-button @click="active++">下一步</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NiukaSteps from '@/components/NiukaSteps/modules/NiukaSteps';

@Component({ name: 'NiukaStepsView', components: { NiukaSteps } })
export default class NiukaStepsView extends Vue {
  public active = 0;

  public steps = [
    { title: '设置基本信息' },
    { title: '设置直播功能' },
    { title: '设置直播详情' },
  ];
}
</script>

<style lang="scss" scoped></style>
