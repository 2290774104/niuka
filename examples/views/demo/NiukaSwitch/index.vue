<template>
  <div>
    <niuka-switch
      v-model="value"
      :info="info"
      @change="handleChange"
      showRemark
      userEdit
      showSort
    >
      <template slot="remark"> remark测试 </template>
    </niuka-switch>
  </div>
</template>

<script lang="ts">
import NiukaSwitch from 'component/Switch';
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'NiukaSwitchView', components: { NiukaSwitch } })
export default class NiukaSwitchView extends Vue {
  public value = 2;

  public info = {
    label: '开关label',
    activeValue: '1',
    inactiveValue: '2',
    sort: '1',
  };

  public handleChange(value: string) {
    console.log(value);
  }
}
</script>

<style lang="scss" scoped></style>
