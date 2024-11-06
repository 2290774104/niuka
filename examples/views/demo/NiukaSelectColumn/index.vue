<template>
  <div>
    <div>选中的值：{{ value }}</div>
    <niuka-select-column v-model="value" :net-work="netWork"></niuka-select-column>
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
  public value = '';

  public netWork = {
    method: () => $get('/mock/column.json'),
  };
}
</script>

<style lang="scss" scoped></style>
