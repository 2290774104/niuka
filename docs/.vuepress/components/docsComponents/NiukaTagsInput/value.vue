<template>
  <div>
    <niuka-tags-input ref="tags" v-model="value"></niuka-tags-input>
    <el-button @click="handleClick1">方法1</el-button>
    <el-button @click="handleClick2">方法2</el-button>
    <el-button @click="handleClick3">方法3</el-button>
    <el-button @click="handleClear">清空</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleClick1() {
      this.value = '标签1 标签2';
    },
    handleClick2() {
      this.$refs.tags.addTags('标签1 标签2');
    },
    handleClick3() {
      this.$refs.tags.addTags(['标签1', '标签2']);
    },
    handleClear() {
      this.value = '';
    },
  },
};
</script>
