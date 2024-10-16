<template>
  <div>
    <el-button @click="fixed = !fixed">
      {{ fixed ? '取消固定' : '固定到屏幕' }}
    </el-button>
    <niuka-anchor query="h2" :fixed="fixed"></niuka-anchor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
    };
  },
};
</script>
