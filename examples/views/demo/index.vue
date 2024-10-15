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
import router from '@/router'

declare interface IComponent {
  name: string;
  path: string;
}

@Component({ name: 'HomePage' })
export default class HomePage extends Vue {
  public components: IComponent[] = [
    { name: 'NiukaSteps', path: '/niukaSteps' },
    { name: 'NiukaTable', path: '/niukaTable' },
    { name: 'NiukaSwitch', path: '/niukaSwitch' },
    { name: 'NiukaAnchor', path: '/niukaAnchor' },
  ];

  public handleClick(component: IComponent) {
    router.push({
      path: component.path,
    });
  }
}
</script>

<style lang="scss" scoped></style>
