<template>
  <div class="carrier">
    <span>右键打开菜单</span>
    <niuka-contextmenu :menus="menus" @event="handleEvent"></niuka-contextmenu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { icon: 'el-icon-edit', title: '编辑', event: 'edit' },
        { icon: 'el-icon-delete', title: '删除', event: 'delete' },
      ],
    };
  },
  methods: {
    handleEvent(e) {
      this.$message.info(`点击了${e.title}菜单`);
    },
  },
};
</script>
