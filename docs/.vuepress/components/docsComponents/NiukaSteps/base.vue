<template>
  <div>
    <niuka-steps :active="active" :steps="steps"></niuka-steps>
    <el-button @click="nextStep">下一步</el-button>
    当前的步骤是：{{ steps[active].title }}
  </div>
</template>

<script>
export default {
  name: 'NiukaStepsBase',
  data() {
    return {
      active: 0,
      steps: [
        { title: '设置基本信息' },
        { title: '设置直播功能' },
        { title: '设置直播详情' },
      ],
    };
  },
  methods: {
    nextStep() {
      this.active < 2 && this.active++;
    },
  },
};
</script>
