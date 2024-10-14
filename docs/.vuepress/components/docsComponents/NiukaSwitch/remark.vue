<template>
  <div>
    <niuka-switch
      v-model="value"
      :info="info"
      showRemark
      userEdit
      @edit="handleChange"
    >
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
      },
    };
  },
  methods: {
    handleChange() {
        console.log(123);
      this.$message.info('点击了开关中的编辑按钮');
    },
  },
};
</script>
