<template>
  <div>
    <niuka-switch
      v-model="value"
      :info="info"
      @change="handleChange"
      @edit="handleEdit"
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
import { Message } from 'element-ui';
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

  public handleEdit() {
    Message.info('点击了编辑按钮')
  }
}
</script>

<style lang="scss" scoped></style>
