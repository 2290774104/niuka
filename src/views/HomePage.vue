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

declare interface IComponent {
  name: string;
  path: string;
}

@Component({ name: 'HomePage' })
export default class HomePage extends Vue {
  public components: IComponent[] = [
    { name: 'StepsPlus', path: '/stepsPlus' },
    { name: 'StepsPlus', path: '/stepsPlus' },
  ];

  public handleClick(component: IComponent) {
    this.$router.push({
      path: component.path,
    });
  }
}
</script>

<style lang="scss" scoped></style>
