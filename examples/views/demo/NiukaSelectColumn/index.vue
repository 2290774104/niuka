<template>
  <div>
    <div>带常用选项：{{ value }}</div>
    <niuka-select-column v-model="value" :net-work="netWork" filterable></niuka-select-column>
    <div>无常用选项：{{ value2 }}</div>
    <niuka-select-column v-model="value2" :net-work="netWork" filterable :recently="false"></niuka-select-column>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NiukaSelectColumn from 'component/SelectColumn';
import { $get } from '@http';

@Component({
  name: 'NiukaColumnView',
  components: { NiukaSelectColumn },
})
export default class NiukaColumnView extends Vue {
  public value = '5';

  public value2 = '5';

  public netWork = {
    method: () => $get('/mock/column.json'),
  };
}
</script>

<style lang="scss" scoped></style>
