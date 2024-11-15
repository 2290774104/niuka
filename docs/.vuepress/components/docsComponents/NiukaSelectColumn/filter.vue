<template>
  <div>
    <div>选中的值：{{ value }}</div>
    <niuka-select-column
      v-model="value"
      :net-work="netWork"
      filterable
    ></niuka-select-column>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      netWork: {
        method: () => this.http.$get('/mock/column.json'),
      }
    };
  },
};
</script>
