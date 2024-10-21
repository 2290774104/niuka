<template>
  <div>
    <niuka-select
      v-model="value"
      data-type="custom"
      :net-work="netWork"
      filterable
      lazy
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
        method: (params) => this.createdOptions(params),
        params: {},
      },
    };
  },
  methods: {
    createdOptions(params) {
      console.log(params, 'params');
      const data = [];
      for (let index = 0; index < params.size; index++) {
        const i = (params.page - 1) * params.size + index + 1;
        data.push({
          label: `选项${i}`,
          value: i,
        });
      }
      return {
        data: data.filter((i) => i.label.includes(params.name)),
      };
    },
  },
};
</script>
