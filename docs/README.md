# niuka

牛咔平台组件库
<test></test>

<niuka-steps :active="active" :steps="steps"></niuka-steps>

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
  created() {
    setTimeout(() => {
      this.active++;
    }, 1000);
  },
};
</script>
