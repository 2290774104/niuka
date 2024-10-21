<template>
  <div>
    <niuka-select
      v-model="value"
      data-type="custom"
      :net-work="netWork"
      filterable
    ></niuka-select>
    当前选中的值是：{{ value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      netWork: {
        method: (params) => this.http.$get('/niuka/mock/select.json', params),
        params: {},
      },
    };
  },
};
</script>
