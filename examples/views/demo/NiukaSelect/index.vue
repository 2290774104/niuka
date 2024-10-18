<template>
  <div>
    <div>
      <niuka-select v-model="value" :options="options"></niuka-select>
      当前选中的值是：{{ value }}
    </div>
    <div>
      <niuka-select
        v-model="value2"
        dataType="custom"
        :netWork="netWork"
        filterable
      ></niuka-select>
      当前选中的值是：{{ value2 }}
    </div>
    <div>
      <div>
        <niuka-select
          v-model="value3"
          dataType="custom"
          :netWork="netWork2"
          filterable
          lazy
        ></niuka-select>
        当前选中的值是：{{ value3 }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NiukaSelect from 'component/Select/modules/NiukaSelect.vue';
import { Component, Vue } from 'vue-property-decorator';
import { $get } from '@http';

@Component({ name: 'NiukaSelectView', components: { NiukaSelect } })
export default class NiukaSelectView extends Vue {
  public value = '';

  public options = [
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '隐藏', value: 'hidden', hidden: true },
    { label: '禁用', value: 'disabled', disabled: true },
  ];

  public value2 = '';

  public netWork = {
    method: (params) => $get('/mock/select.json', params),
    params: {},
  };

  created() {}

  public value3 = '';

  public netWork2 = {
    method: (params) => this.createdOptions(params),
    params: {},
  };

  private createdOptions(params) {
    const data = [];
    for (let index = 0; index < params.pageSize; index++) {
      const i = (params.pageNo - 1) * params.pageSize + index + 1;
      data.push({
        label: `选项${i}`,
        value: i,
      });
    }
    return {
      data: data.filter((i) => i.label.includes(params.name)),
    };
  }
}
</script>

<style lang="scss" scoped></style>
