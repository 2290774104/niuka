<template>
  <div>
    <niuka-steps :active="active" :steps="steps" :space="100"></niuka-steps>
  </div>
</template>
<script>
export default {
  name: 'NiukaStepsSpace',
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
};
</script>
