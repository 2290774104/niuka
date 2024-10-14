<template>
  <div>
    <niuka-switch v-model="value" :info="info" @change="handleChange">
    </niuka-switch>
    当前开关的值：{{ value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '2',
      info: {
        label: '开关label',
        activeValue: '1',
        inactiveValue: '2',
      },
    };
  },
  methods: {
    handleChange(value) {
      this.$message.info(`当前开关的值是：${value}`);
    },
  },
};
</script>
