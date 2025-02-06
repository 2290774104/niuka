<template>
  <div>
    <el-button
      v-for="item in components"
      :key="item.name"
      @click="handleClick(item)"
    >
      {{ item.name }}
    </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';

declare interface IComponent {
  name: string;
  path: string;
}

@Component({ name: 'HomePage' })
export default class HomePage extends Vue {
  public components: IComponent[] = [
    // 表单组件
    { name: 'NiukaSwitch', path: '/niukaSwitch' },
    { name: 'NiukaSelect', path: '/niukaSelect' },
    { name: 'NiukaTagsInput', path: '/niukaTagsInput' },
    { name: 'NiukaSelectTree', path: '/niukaSelectTree' },
    { name: 'NiukaSelectColumn', path: '/niukaSelectColumn' },
    // 数据展示
    { name: 'NiukaTable', path: '/niukaTable' },
    { name: 'NiukaImageList', path: '/niukaImageList' },
    { name: 'NiukaLoadList', path: '/niukaLoadList' },
    { name: 'NiukaImage', path: '/niukaImage' },
    // 导航
    { name: 'NiukaSteps', path: '/niukaSteps' },
    { name: 'NiukaAnchor', path: '/niukaAnchor' },
    { name: 'NiukaContextmenu', path: '/niukaContextmenu' },
    // 其他
    { name: 'NiukaDraggable', path: '/niukaDraggable' },
  ];

  public handleClick(component: IComponent) {
    router.push({
      path: component.path,
    });
  }
}
</script>

<style lang="scss" scoped>
.el-button {
  margin: 0 10px 10px 0;
}
</style>
