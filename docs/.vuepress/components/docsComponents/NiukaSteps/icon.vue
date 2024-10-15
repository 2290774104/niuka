<template>
  <div>
    <niuka-steps :active="active" :steps="steps"></niuka-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      steps: [
        { title: '设置基本信息', icon: 'edit' },
        { title: '设置直播功能', icon: 'edit' },
        { title: '设置直播详情', icon: 'edit' },
      ],
    };
  },
};
</script>
