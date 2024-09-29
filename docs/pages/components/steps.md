:::demo

```vue
<template>
  <div>
    <niuka-steps :active="active" :steps="steps" :space="90"></niuka-steps>
    <el-button @click="active++">下一步</el-button>
  </div>
</template>
<script>
export default {
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
```

:::
