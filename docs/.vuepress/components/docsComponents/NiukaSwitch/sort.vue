<template>
  <div>
    <niuka-switch v-model="value" :info="info" showRemark userEdit showSort>
      <template slot="remark"> 这是 remark 插槽中的值 </template>
    </niuka-switch>
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
        sort: 1,
      },
    };
  },
};
</script>
