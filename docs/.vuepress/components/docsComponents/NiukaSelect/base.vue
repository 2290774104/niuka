<template>
  <div>
    <niuka-select v-model="value" :options="options"></niuka-select>
    当前选中的值是：{{ value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '隐藏', value: 'hidden', hidden: true },
        { label: '禁用', value: 'disabled', disabled: true },
      ],
    };
  },
};
</script>
