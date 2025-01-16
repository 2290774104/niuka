<template>
  <div class="carrier">
    <span>右键打开菜单</span>
    <niuka-contextmenu :menus="menus"></niuka-contextmenu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NiukaContextmenu from 'component/Contextmenu';
@Component({ name: 'NiukaContextmenuView', components: { NiukaContextmenu } })
export default class NiukaContextmenuView extends Vue {
  public menus = [
    { icon: 'el-icon-edit', title: '编辑', event: 'edit' },
    { icon: 'el-icon-delete', title: '删除', event: 'delete' },
  ];
}
</script>

<style lang="scss" scoped>
.carrier {
  width: calc(100vw - 16px);
  height: calc(100vh - 16px);
}
</style>
